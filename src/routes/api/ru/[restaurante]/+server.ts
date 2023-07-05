import { error, json } from '@sveltejs/kit'
import axios, { toFormData } from 'axios'
import * as cheerio from 'cheerio'
import omitDeep from 'omit-deep'
import type { Day, Menu } from '$lib/types/day.js'

import { RESTAURANTES } from '$lib/types/constants.js'

export const GET = async ({ params, url }) => {
    const omitted = url.searchParams.getAll('omit')
    const restauranteId = Number.parseInt(params.restaurante)
    const restaurante = RESTAURANTES.find(r => r.numero === restauranteId)

    if (!restaurante) {
        throw error(400, {
            message: `invalid query. use one of ${Object.values(RESTAURANTES).map(r => r.numero)}`,
        })
    }

    const { data } = await axios.request({
        method: 'POST',
        url: 'https://portal.ufsm.br/ru/cardapio.html',
        data: toFormData({
            restaurante: restaurante.numero,
        }),
        responseType: 'arraybuffer',
        responseEncoding: 'binary',
    })

    const $ = cheerio.load(data.toString('latin1'))

    const tabs = $('.tabs')
    const panes = $('.pane').toArray()

    const result: Day[] = panes.map(p => {
        const pane = $(p)
        const tables = pane.find('> .table-wrapper').toArray()
        const tabName = tabs
            .find(`a[href='#${pane.attr('id')}']`)
            .first()
            .text()
        const [weekday, date] = tabName.split(' - ')
        let menu: Menu[] = tables.map(t => {
            const table = $(t).find('table').first()
            const type = table.find('thead.header > tr.info > th').first().text()
            const body = table.find('tbody').first()
            const content = body
                .children()
                .toArray()
                .map(el => {
                    const title = $(el).find('tr > td').first().text()
                    const ingredients = $(el)
                        .find('tr > td.hidden table > tbody > tr > td')
                        .toArray()
                        .map(el => {
                            return $(el).text()
                        })

                    return {
                        title,
                        ingredients,
                    }
                })

            return {
                type,
                content,
            }
        })

        return {
            weekday,
            date,
            menu: omitDeep(menu, omitted) as Menu[],
        }
    })

    return json(result)
}
