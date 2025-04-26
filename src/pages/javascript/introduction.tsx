import React from 'react';
import Head from "next/head";

const JSIntroduction: React.FC = () => {
    return(
        <React.Fragment>
            <Head>
                <title>Introduction to JS | Mehran Codes</title>
            </Head>

            <h1>Introduction to JavaScript</h1>
            <p>
                JavaScript is a programming language created at Netscape (now part of Mozilla) in 1995.
                Due to a trademark conflict with Sun Microsystems (now Oracle), it could not be officially
                named "JavaScript," so the standardized version is called ECMAScript.
                The creators submitted JavaScript to ECMA (European Computer
                Manufacturers Association) to standardize its specifications.
            </p>
            <p>
                Key Features:
                <ul>
                    <li className="mt-2">
                        High-level: Uses human-readable syntax and handles complex tasks
                        (e.g., memory management) automatically.
                    </li>
                    <li className="mt-2">
                        Dynamic: Variables can change types at runtime, and objects can be
                        modified flexibly (e.g., adding properties dynamically).
                    </li>
                    <li className="mt-2">
                        Interpreted: Executed line-by-line by an interpreter (rather
                        than being pre-compiled).
                    </li>
                </ul>
            </p>

            <hr/>

            <p>
                <form action="#">
                    <p>Question1: When was JavaScript created?</p>
                    <input type="radio" id="1993" name="first_question" value="1993"/>
                    <label htmlFor="1993">1993</label>

                    <br/>

                    <input type="radio" id="1994" name="first_question" value="1994"/>
                    <label htmlFor="1994">1994</label>

                    <br/>

                    <input type="radio" id="1995" name="first_question" value="1995"/>
                    <label htmlFor="1995">1995</label>

                    <br/>

                    <input className="btn btn-primary" type="button" value="apply"/>
                </form>
            </p>

        </React.Fragment>
    )
}

export default JSIntroduction;