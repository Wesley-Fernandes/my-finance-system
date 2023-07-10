"use client"


import axios from "axios";
import supabase from "@modules/supabase/supabase";
import { IImgbb } from "@modules/types/imgbb";

interface IimgbbNeed{
    new_image: any;
    title: string;
    user_id: string;
}

async function imgbbPost({new_image, title, user_id}:IimgbbNeed){
    axios.post(encodeURI(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`), new_image).then(async(result)=>{
        const data:IImgbb = result.data;
        const { data:postage, error } = await supabase
        .from('posts')
        .insert([
            {
                image: data.data.image.url,
                thumbnail: data.data.thumb.url,
                title: title,
                user_id: user_id,
                detele_url: data.data.delete_url
            },
        ]);


        if(error){
            throw new Error(`Houve um erro ao criar postagem: ${error.message}`)
        }


        console.log("Postagem criada com sucesso!");
        return



    }).catch((err)=>{
        console.log(`FAIL: ${err}`);
    });
}

async function imgbbUser({new_image}:IimgbbNeed){
    axios.post(encodeURI(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`), new_image).then(async(result)=>{
        console.log("User creation sucess!");
        return result.data.thumbnail;



    }).catch((err)=>{
        console.log(`FAIL: ${err}`);
    })
}

export {imgbbPost , imgbbUser}