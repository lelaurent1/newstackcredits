import React from 'react'
import type { JSX } from 'react/jsx-runtime'


import images_6ea610da_dc0f_4ee3_93f2_fceacbfd094e_svg from '/images/6ea610da-dc0f-4ee3-93f2-fceacbfd094e.svg';
import images_52204275_f705_49fa_ae17_faaf2416136b_svg from '/images/52204275-f705-49fa-ae17-faaf2416136b.svg';
import product1_img from '/assets/attachments/parasolchlorine_freediaperswithrashshieldprotection_size1_88ct_3jv927_thumbnail.png';
import product2_img from '/assets/attachments/2fb3vlbpa5kfa3_thumbnail.png';
import product3_img from '/assets/attachments/parasolchlorine_freediaperswithrashshieldprotection_size3_64ct_eaczua_thumbnail.png';
import product4_img from '/assets/attachments/parasolchlorine_freediaperswithrashshieldprotection_size6_40ct_igav88_thumbnail.png';
import product5_img from '/assets/attachments/3re22hyqeh7cj3_thumbnail.png';
import images_d1a41de7_139e_4aa2_bc4a_1414aedc6380_svg from '/images/d1a41de7-139e-4aa2-bc4a-1414aedc6380.svg';

export const Img = ({ id }) => {
    switch (String(id)) {    case "0":
        return (
            <img src={images_6ea610da_dc0f_4ee3_93f2_fceacbfd094e_svg} alt={"Stack Influence logo"} width={"253"} height={"40"} style={{maxWidth:"100%", willChange:"transform"}}></img>
        );
    case "1":
        return (
            <img src={images_52204275_f705_49fa_ae17_faaf2416136b_svg} alt={"Meta logo"} width={"24"} height={"24"}></img>
        );
    case "2":
        return (
            <img className={"MuiBox-root css-1l4vi6g"} src={product1_img} style={{opacity:"1"}}></img>
        );
    case "3":
        return (
            <img className={"MuiBox-root css-1l4vi6g"} src={product2_img} style={{opacity:"1"}}></img>
        );
    case "4":
        return (
            <img className={"MuiBox-root css-1l4vi6g"} src={product3_img} style={{opacity:"1"}}></img>
        );
    case "5":
        return (
            <img className={"MuiBox-root css-1l4vi6g"} src={images_d1a41de7_139e_4aa2_bc4a_1414aedc6380_svg} style={{opacity:"1"}}></img>
        );
    case "6":
        return (
            <img className={"MuiBox-root css-1l4vi6g"} src={product4_img} style={{opacity:"1"}}></img>
        );
    case "7":
        return (
            <img className={"MuiBox-root css-1l4vi6g"} src={product5_img} style={{opacity:"1"}}></img>
        );
    default:
        return null;
    }
};

export default Img
