import Slideshow from "../components/Slideshow";
import LandingHeader from "../components/LandingHeader";
import PageWrapper from "../components/PageWrapper";
import { useFetchPosts, useFetchSlides } from "../../infrastructure/APIHandler";
import { useTranslation } from "react-i18next";
export const Landing = () => {
    let { data, loading } = useFetchSlides();
    const slides = data;
    ({ data, loading } = useFetchPosts({
        featured: true,
    }));
    const featuredPosts = data;
    if (featuredPosts[0]) {
        var featuredPostsFirstRow = featuredPosts.slice(0, 2);
        var featuredPostsSecondRow = featuredPosts.slice(2, 5);
    }
    const { t, i18n } = useTranslation();
    console.log(featuredPosts);
    return (
        <PageWrapper
            keywords=""
            description=""
            title="Home page"
            loading={loading}
        >
            <LandingHeader
                p="Amirkabir University of Technology"
                h1="Biofluids laboratory"
            />
            {slides[0] && <Slideshow slides={slides} />}
            <section id="featured-2">
                <div className="featured featured--color-background w3-light-grey">
                    <h2 className="w3-text-dark-grey">
                        <i className="fa-solid fa-star" />
                        <span className="w3-padding">
                            {t("featuredPostsFirstRow")}
                        </span>
                    </h2>
                    <div className="w3-cell w3-mobile-row">
                        {featuredPostsFirstRow &&
                            featuredPostsFirstRow.map((post) => (
                                <div className="w3-container w3-round-large w3-cell w3-mobile w3-border">
                                    <div className="w3-light-grey w3-padding w3-margin w3-round-large">
                                        <article>
                                            <h3>{post.title[i18n.language]}</h3>
                                            <hr />
                                            <p
                                                className="w3-text-dark-grey featured__text"
                                                dangerouslySetInnerHTML={{
                                                    __html: post.content[
                                                        i18n.language
                                                    ],
                                                }}
                                            ></p>
                                        </article>
                                        <button className="w3-button w3-block w3-teal w3-round">
                                            more
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            <section id="featured-3">
                <div className="featured featured--image-background">
                    <h2 className="w3-text-dark-grey">
                        <i className="fa-solid fa-bolt" />
                        <span className="w3-padding">
                            {t("featuredPostsSecondRow")}
                        </span>
                    </h2>
                    <div className="w3-cell w3-mobile-row">
                        {featuredPostsSecondRow &&
                            featuredPostsSecondRow.map((post) => (
                                <div className="w3-container w3-round-large w3-cell w3-mobile">
                                    <div className="w3-light-grey w3-padding w3-margin w3-round-large">
                                        <article>
                                            <h3 className="w3-text-dark-grey">
                                                {post.title[i18n.language]}
                                            </h3>
                                            <hr />
                                            <p
                                                className="w3-text-dark-grey featured__text"
                                                dangerouslySetInnerHTML={{
                                                    __html: post.content[
                                                        i18n.language
                                                    ],
                                                }}
                                            ></p>
                                        </article>
                                        <button className="w3-button w3-block w3-teal w3-round">
                                            more
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            <section id="people">
                <h2
                    className="w3-text-dark-grey w3-light-blue w3-panel w3-padding"
                    style={{ marginBottom: 0 }}
                >
                    <i className="fa-solid fa-chalkboard-user" />
                    <span className="w3-padding">{t("professors")}</span>
                </h2>
                <div className="w3-cell w3-mobile-row">
                    <div className="w3-cell w3-mobile w3-light-grey w3-card-4 w3-padding w3-round">
                        <header>
                            <img
                                src="https://www.w3schools.com/howto/img_avatar.png"
                                className="w3-round"
                                style={{ width: 50, height: 50 }}
                            />
                            <span className="w3-margin w3-text-dark-grey">
                                Lorem, ipsum.
                            </span>
                        </header>
                        <article>
                            <h2 className="w3-text-dark-grey">
                                Lorem ipsum dolor sit.
                            </h2>
                            <p className="w3-text-grey">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Nisi, quisquam est. Optio
                                earum, veniam quod facere saepe eum
                                necessitatibus dolore rerum minus.
                            </p>
                        </article>
                    </div>
                    <div className="w3-cell w3-mobile w3-light-grey w3-card-4 w3-padding w3-round">
                        <header>
                            <img
                                src="https://www.w3schools.com/howto/img_avatar.png"
                                className="w3-round"
                                style={{ width: 50, height: 50 }}
                            />
                            <span className="w3-margin w3-text-dark-grey">
                                Lorem, ipsum.
                            </span>
                        </header>
                        <article>
                            <h2 className="w3-text-dark-grey">
                                Lorem ipsum dolor sit.
                            </h2>
                            <p className="w3-text-grey">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Unde nulla qui fuga molestias
                                eius provident, eos, voluptates consequatur
                                magni ipsam quos a maiore
                            </p>
                        </article>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="w3-padding-large w3-light-grey">
                    <h2 className="w3-text-dark-grey">
                        <i class="fa-solid fa-pen-to-square" />
                        <span className="w3-padding">{t("contactUs")}</span>
                    </h2>
                    <div className="w3-row w3-center">
                        <div className="w3-third w3-dark-grey w3-padding-24">
                            <i className="fa fa-envelope w3-xxlarge w3-text-light-grey" />
                            <p>John@doe.com</p>
                        </div>
                        <div className="w3-third w3-teal w3-padding-24">
                            <i className="fa fa-location-dot w3-xxlarge w3-text-light-grey" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Et, ut!
                            </p>
                        </div>
                        <div className="w3-third w3-dark-grey w3-padding-24">
                            <i className="fa fa-phone w3-xxlarge w3-text-light-grey" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <hr className="w3-opacity" />
                    <form action="#" method="POST">
                        <div className="w3-section">
                            <label htmlFor="name">
                                Lorem ipsum dolor sit amet.
                            </label>
                            <input
                                className="w3-input w3-border w3-round"
                                type="text"
                                name="name"
                                required=""
                            />
                        </div>
                        <div className="w3-section">
                            <label htmlFor="email">
                                Email ipsum dolor sit amet.
                            </label>
                            <input
                                className="w3-input w3-border w3-round"
                                type="text"
                                name="email"
                                required=""
                            />
                        </div>
                        <div className="w3-section">
                            <label htmlFor="message">Lorem, ipsum dolor.</label>
                            <textarea
                                className="w3-input w3-border w3-round"
                                type="text"
                                name="mesage"
                                rows={5}
                                required=""
                                defaultValue={""}
                            />
                        </div>
                        <div className="w3-section">
                            <div className="w3-text-red">
                                <ul>
                                    <li>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Nisi, dignissimos.
                                    </li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            <div className="w3-center">
                                <button
                                    type="submit"
                                    className="w3-button w3-teal w3-margin-bottom w3-round"
                                >
                                    <i className="fa fa-paper-plane w3-margin-right" />
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </PageWrapper>
    );
};
export default Landing;
