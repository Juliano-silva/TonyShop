import Link from "next/link"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
export default function Conteúdo({skate}){
    const {skates,slug,componentes,method,listaSkate} = skate.fields
    return(
        <div id="Corpo">
        <div id="Card">
            <h1>{skates}</h1>
            <h2>{slug}</h2>
            <h3>{componentes}</h3>
            <h4>{listaSkate+";"}</h4>
            <div>{documentToReactComponents(method)}</div>
            <div>
            </div>
        </div>
            <style jsx>
                {`
                #Card{
                    border: 1px solid red;
                    display: grid;
                    height: 40em;
                    width: 47em;
                }
                #Corpo{
                    padding:10px;
                    display: inline-block;
                }
                `}
            </style>
        </div>
    )
}