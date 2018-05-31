import imageUrl from '../../../../../images/travel-no-image.jpg'
const travelNoImage = experiensa_vars.dist_url + 'vendor/travel-no-image.jpg'

export function getVoyagePrice(data){
    let currency = "USD";
    if(data.currency!=null)
        currency = data.currency
    let price = "Non disponible"
    if(data.price != '')
        price = data.price
    if(price != "Non disponible")
        price = currency+' '+price
    return price
}

export function getVoyageImage(data){
    const lostTravelImage = travelNoImage
    let image = data.cover_image
    let imageSrc
    let gallery = false
    if(!image.feature_image && image.gallery.length < 1){
        imageSrc = lostTravelImage
    }else{
        if(image.gallery.length > 0){
            imageSrc = image.gallery
            gallery = true            
        }else{
            imageSrc = image.feature_image
        }
    }
    return {
        src: imageSrc,
        gallery: gallery
    }
}
/*export function getGallery(data){        
    if(data.cover_image.gallery.lenght > 0)
        return data.cover_image.gallery;
    return [];
}*/