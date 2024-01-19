"use client"
import Navbar from "@/components/Navbar";
import SearchResults from "@/components/SearchResults";

const SearchPage = (props: any) => {
    return (
        <>
            <Navbar/>

            <main>
                <article>
                    <section className="tv-series">
                        <div className="container">
                            <h2 className="h2 section-title">Search results for "{props.params.slug.replace(/%20/g, ' ')}"</h2>

                            <SearchResults searchQuery={props.params.slug}/>
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}

export SearchPage;