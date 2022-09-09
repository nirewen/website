<script lang="ts">
    import IconLink from '../IconLink.svelte'
    import socials from '../../data/socials.json'
</script>

<section>
    <div class="main">
        <div class="info">
            <img class="avatar" src="/images/avatar.svg" alt="Nirewen's avatar" />
            <div class="name">
                <div class="fullname">
                    <span>Eduardo</span>
                    <span>Londero</span>
                </div>
                <div class="aka">
                    <acronym title="also known as">aka</acronym>
                    <span>Nirewen</span>
                </div>
            </div>
        </div>
        <div class="description">
            <h4>Full-stack developer</h4>
            <span>I make websites, bots and desktop applications</span>
        </div>
    </div>
    <div class="socials">
        {#each socials as link}
            <IconLink {...link} side="right" />
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        flex: 1;
        background-image: url('../../assets/card-bg.png');
        background-size: cover;

        border-radius: 12px;
    }

    .main {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        > .info {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 5% 5% 5% 8%;

            > .avatar {
                width: clamp(100px, 28vw, 200px);
            }

            > .name {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                font-family: 'Rubik Mono One', monospace;
                font-size: clamp(28px, 5vw, 42px);

                > .fullname {
                    display: flex;
                    flex-direction: column;

                    > span {
                        line-height: 1;
                    }
                }

                > .aka {
                    display: flex;
                    flex-direction: column;
                    color: #ffffff;
                    opacity: 80%;

                    > acronym {
                        font-size: clamp(16px, 4vw, 24px);
                        text-decoration: none;
                    }

                    > span {
                        line-height: 1;
                    }
                }
            }
        }

        > .description {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            text-align: end;

            padding: 2% 5%;
            font-size: 0.85rem;

            background-color: #00000020;

            border-radius: 0;

            > h4 {
                font-size: 1.3rem;
            }
        }
    }

    .socials {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        background-color: #00000030;

        padding: 16px 20px;

        border-radius: 0 0 12px 12px;
    }

    @media screen and (min-width: 500px) {
        section {
            flex-direction: row;
        }

        .main > .description {
            border-radius: 0 0 0 12px;
        }

        .socials {
            flex-direction: column;
            padding: 18.5px 14px;

            border-radius: 0 12px 12px 0;
        }
    }
</style>
