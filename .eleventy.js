
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("card", function(name, au_distance) {
    return `<div class="planet">
    <div class="card_wrapper no_hover">
      <h3 class="planet_name">${name}</h3>
      <p class="au_distance">${au_distance}</p>
    </div>
  </div>`;
  });
};