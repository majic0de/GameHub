// Function to get a cropped version of an image URL
const getCroppedImageUrl = (url: string) => {
  if (!url) return ""; // Return an empty string if the URL is not provided

  const target = "media/";
  const index = url.indexOf(target) + target.length;

  // Insert "crop/600/400/" into the URL to get the cropped image
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
