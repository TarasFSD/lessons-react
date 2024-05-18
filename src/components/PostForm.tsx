import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {IPostModel} from "../models/PostModel"
import {SendPostData} from "../services/post.axios"

export const PostForm: FC = () => {
    let {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<IPostModel>({mode: "all", resolver: joiResolver(postValidator)});

    const save = (formValues: IPostModel ) => {
        SendPostData(formValues)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input {...register('title')}/>
                <br/>
                {
                    errors.title && <span>{errors.title.message}</span>
                }
                <br/>
                <input  {...register('body')}/>
                <br/>
                {
                    errors.body && <span>{errors.body.message}</span>
                }
                <br/>

                <button>ok</button>
            </form>
        </div>
    );
};

