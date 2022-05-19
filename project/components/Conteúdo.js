import Link from "next/link"
import Image from 'next/image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
export default function Conteúdo({skate}){
    const {skates,slug,thumb,componentes,method,listaSkate} = skate.fields
    return(
        <div id="Corpo">
        <div id="Card">
            <div id="img">
            <Image src={'https:'+thumb.fields.file.url}
            width={thumb.fields.file.details.image.width}
            height={thumb.fields.file.details.image.height}
            />
            </div>
            <h1 id="Título">{skates}</h1>
            <div id="Contéudo">
            <h2 id="sub-título">{slug}</h2>
            <h3 id="num">{componentes}</h3>
            <h4 id="Lists">{listaSkate+";"}</h4>
            <div id="Texto">
                <details><summary>Descrição</summary><p>{documentToReactComponents(method)}</p></details></div>
            </div>
        </div>
        
            <style jsx>
                {`
                #Card{
                    border: 4px solid black;
                    border-radius: 50px;
                    display: grid;
                    height: 60em;
                    width: 40em;
                    margin:auto;
                }
                #Corpo{
                    padding:10px;
                   display:inline-block;
                }
                #Imagens{
                    display:block;
                    width:100%;
                    height:30em;
                    border-radius:45px 45px 0px 0px;
                }
                #Título{
                    margin-top: 2px;
                    font-size:50px;
                    height:1.4em;
                    color:black;
                    background:yellow;
                }
                #Contéudo{
                    display:block;
                    overflow:auto;
                    height:25em;
                    margin-top: -30px;
                    widht:10em;
                    border-radius:0 0 45px 45px;
                }
                `}
            </style>
        </div>
    )
}