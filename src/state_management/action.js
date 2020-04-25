export const FETCH_PUBLIC_IMAGES = "FETCH_PUBLIC_IMAGES";

export function fetchPublicPhotos(photos) {
  return {
    type: FETCH_PUBLIC_IMAGES,
    photos: photos,
  };
}
