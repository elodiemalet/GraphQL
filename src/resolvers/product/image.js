export default async (parent, args, {dataSources}) => {
    const imageByProductId = await dataSources.image.getImageByProductId(parent.id);
    return imageByProductId;
}