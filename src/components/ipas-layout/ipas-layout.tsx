import { Header } from '@/components/header/header'
import { Footer } from '@/components/footer/footer'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
