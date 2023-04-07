import Header from '../Shared/Header'
import Footer from '../Shared/Footer'

const Layout = ({
    hideHeader = false,
    hideFooter = false,
    children,
    title = "Mufti Sufyan Mansurpuri"
}) => {
    return (
        <>
            <head>
                <title>{title}</title>
                
                    

            </head>
            {
                !hideHeader && <nav> <Header />  </nav>
            }
            {/* <div className='bg-red opacity-[80%]'>
            <Notification/>
            </div> */}
            <main className='min-h-screen'>
                


                {children}
            </main>
            {
                !hideFooter && <footer><Footer /></footer>
            }
        </>
    )
}

export default Layout