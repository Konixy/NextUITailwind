import * as React from "react";
import {CssBaseline} from "@nextui-org/react"
import "./css/base.css";

export function WithNextUI({children}: React.PropsWithChildren) {
    return <>{children}{CssBaseline.flush()}</>
}