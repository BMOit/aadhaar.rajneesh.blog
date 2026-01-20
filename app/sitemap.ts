export const baseUrl = "https://aadhaar.rajneesh.blog";

export default async function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
