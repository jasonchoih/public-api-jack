// import cloudinary from "cloudinary";

// cloudinary.v2.config({
//     cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// })
// // 
// const uploadImage = async(d) =>
// {  
//     const { image_data, image_name } = d;
//     // 
//     const result = await cloudinary.uploader.upload(image_data, {
//         folder: 'api',
//         public_id: image_name,
//         resource_type: 'image',
//         // use_filename: true,
//         overwrite: true
//     });
//     console.log(result)
// }
// // 
// export {
//     uploadImage
// }
// /*

// // const VisuallyHiddenInput = styled('input')({
// //     clip: 'rect(0 0 0 0)',
// //     clipPath: 'inset(50%)',
// //     height: 1,
// //     overflow: 'hidden',
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     whiteSpace: 'nowrap',
// //     width: 1
// // });
// // 
// // const onChange = (e) => 
// // {
// //     let file = e.target.files[0];
// //     if(file){
// //         const reader = new FileReader()
// //         reader.readAsDataURL(file)
// //         reader.onload = () => {
// //             dispatch.models.SET({
// //                 Image: {
// //                     image_data: reader.result,
// //                     image_name: file['name']
// //                 }
// //             })
// //         }
// //     }
// // }

// <div>
//     <Button
//         component="label"
//         role={undefined}
//         variant="contained"
//         tabIndex={-1}
//         startIcon={<CloudUploadIcon />}
//     >
//         Upload Logo
//         <VisuallyHiddenInput 
//             type="file" 
//             onChange={onChange} 
//             accept='.jpeg, .png, .jpg'
//         />
//     </Button>
// </div> 

// */