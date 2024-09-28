import React from "react";
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

function RTE(){

    return(
        <div>
            <Controller>
                <Editor>
                    
                </Editor>
            </Controller>
        </div>
    )
}

export default RTE