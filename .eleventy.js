
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("card", function(planet_width, planet_height, margin_top, margin_bottom, color, name, au_distance) {
    return `<div class="planet">
    <div class="card_wrapper no_hover">
      <div class="circle" style="width: ${planet_width}; height: ${planet_height}; margin-top: ${margin_top}; margin-bottom: ${margin_bottom}; background-color: ${color};">
      </div>
      <h3 class="planet_name">${name}</h3>
      <p class="au_distance">${au_distance}</p>
    </div>
  </div>`;
  });
};