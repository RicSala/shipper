// import { getCurrentUser } from "@/actions/getCurrentUser";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "@/components/container";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar/nav-bar";
// export const dynamic = "force-dynamic";


const SiteLayout = async ({ children }) => {

    const currentUser = await getCurrentUser();

    // REVIEW: why not passing current user to children through the layout?
    return (

        <div className="flex flex-col justify-between min-h-screen ">
            <NavBar currentUser={currentUser} />
            <div className="flex-grow w-full p-0 pt-20 pb-20 sm:pt-32 bg-background text-foreground sm:p-8">
                <Container>
                    {/* <Container> */}
                    {children}
                    {/* </Container> */}
                </Container>
            </div>
            <Footer />
        </div>

    )
};
export default SiteLayout;