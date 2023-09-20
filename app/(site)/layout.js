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

        <div className="flex flex-col justify-between min-h-screen">
            <NavBar currentUser={currentUser} />
            <Container className={''}>
                {/* <Container> */}
                {children}
                {/* </Container> */}
            </Container>
            <Footer />
        </div>

    )
};
export default SiteLayout;