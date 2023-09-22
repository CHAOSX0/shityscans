import Nav from "@/components/nav"
import View from "./compoents/viewBox"
export default async function Home(){
    return (
        <div>
           <Nav Items={[{text: 'الرئيسية', URL:'/'}, {text: 'أعمالنا', URL: '/serieslist'}, {text:'المفضلة', URL: '/favorite'}]}/>
            <View />
        </div>
    )
}