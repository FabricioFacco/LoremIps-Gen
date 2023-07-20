function generateLoremIpsum(length = 100) {
    const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis nisi a vestibulum pharetra. Mauris leo magna, placerat nec orci ac, mollis ultrices nulla. Phasellus vitae sapien vitae metus finibus blandit. Suspendisse lobortis lorem enim, luctus efficitur justo scelerisque ut. Nullam volutpat posuere ligula, eget consectetur orci varius vel. Integer finibus ornare lorem bibendum placerat. Nullam iaculis, dui sed congue ultricies, odio elit placerat augue, sit amet iaculis eros ex vel arcu. Nulla sit amet porttitor diam. Aenean malesuada lacus mauris. Vivamus finibus tellus lectus, non sagittis enim vestibulum sed. Nam non consectetur ipsum. Vivamus vel massa fringilla, egestas ante ut, accumsan nisi. In hac habitasse platea dictumst. Vestibulum eget urna tortor. Ut quis ultrices sapien, sollicitudin placerat risus. Phasellus pulvinar malesuada magna eu eleifend Suspendisse vulputate condimentum egestas. Nulla at nulla ac lacus elementum sagittis. Donec id finibus nulla, eu fringilla libero. Donec nibh felis, maximus sed nibh ut, tempus maximus lorem. Nullam ultrices, orci ut rutrum egestas, tellus felis posuere nunc, id pharetra turpis ex et nulla. Donec vel rhoncus metus. Phasellus dapibus odio vitae massa laoreet, quis blandit nulla consectetur.`;
  
    let loremIpsum = '';
    while (loremIpsum.length < length) {
      loremIpsum += loremIpsumText + ' ';
    }
  
    return loremIpsum.substr(0, length);
  }
  
  module.exports = generateLoremIpsum;