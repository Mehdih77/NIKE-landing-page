import Header from '../components/Header/header'

function Layout({children}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
