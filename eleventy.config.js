export default function (eleventyConfig) {
  // Copy photos, styles and the editor straight through to the site.
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Galleries, in the order set in each gallery's "order" field.
  eleventyConfig.addCollection("galleries", (api) =>
    api.getFilteredByGlob("src/galleries/*.md").sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
