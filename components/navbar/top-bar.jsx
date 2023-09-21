'use client'

import { useState } from "react";
import Container from "../container";
import Stretcher from "../utils/strecher";

export default function TopBar({
    text = "This is a topbar Message!"
}) {

    const [shown, setShown] = useState(true);

    if (!shown) return

    return (
        <Stretcher className={"bg-info text-info-content"}>
            <Container className={'relative'}>
                <div className="relative">
                    <div className="flex justify-center items-center w-full">
                        {/*   -mt-1 sm:-mt-4 mb-1 sm:mb-4 */}
                        {/* TODO: Pending. I was not able to create the animation - Do it when learnt */}
                        {/* <p className="animate-horizontal"> */}
                        <p className="">
                            {text}
                        </p>
                    </div>
                    <div className="absolute right-0 top-0">
                        X
                    </div>
                </div>
            </Container>
        </Stretcher>
    );
}