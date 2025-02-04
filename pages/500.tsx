import { NextPageContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ErrorBlock } from "../components/errors/ErrorBlock";
import { Postcard } from "../components/postcard/Postcard";
import { ViewNotice } from "../components/view/ViewNotice";
import errorPostcard from "../public/postcards/markus-spiske-iar-afB0QQw-unsplash-red.jpg"


export async function getStaticProps(context: NextPageContext) {
    return {
        props: {
            ...(await serverSideTranslations(context.locale ?? "it-IT", ["common"]))
        }
    }
}


export default function Page500() {
    const {t} = useTranslation()

    return <>
        <Postcard src={errorPostcard.src}/>
        <ViewNotice 
            notice={
                <ErrorBlock
                    text={t("internalServerError")}
                    error={new Error("HTTP 500 (Internal server error)")}
                />
            }
        />
    </>
}