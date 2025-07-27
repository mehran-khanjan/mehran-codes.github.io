import React from 'react';
import Link from "next/link";
import {Route, routes} from "@/utils/routes";
import {colors} from "@/utils/colors";
import {v4 as uuid} from 'uuid';
import {forEach} from "react-bootstrap/ElementChildren";

type PropsType = {
    items: any,
    color: string,
}

const ArticleItem: React.FC<PropsType> = ({items, color}) => {
    if (items.length === 0) {
        return (
            <div>Add some items</div>
        );
    }

    return (
        <>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="px-2 py-2 rounded" style={{backgroundColor: colors.gray}}>
                        <h2 className="">
                            Blockchain
                        </h2>

                        <hr/>

                        <h3 className="">
                            Solana
                        </h3>

                        <div className="row">

                            {items.map((item: any) => {
                                return (
                                    <div key={uuid()} className="col-12 col-sm-6 mt-1 mb-1">
                                        <div className="rounded" style={{backgroundColor: color}}>
                                            <Link href={item.url}
                                                  className="d-block text-decoration-none text-white px-2 py-2">
                                                {item.title}
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ArticleItem;