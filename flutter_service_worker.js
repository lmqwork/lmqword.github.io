'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ca2312ab0f569d061267bf2cd63ba46a",
"index.html": "8defc6ec39e094bf2450e7385a25944e",
"/": "8defc6ec39e094bf2450e7385a25944e",
"main.dart.js": "8f431bcfab0ae495039d7646876d44d7",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1332a69e5b3a0c3c38ee596ae74278ee",
"assets/AssetManifest.json": "2ab90893f507a743fdec1d0ad92c8fed",
"assets/NOTICES": "3f0aaa376d66fac11a7749584d1098b7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/tailwind_standards/assets/color_palettes/fuchsia.png": "1a041b2df0835f640de5160216f87e6c",
"assets/packages/tailwind_standards/assets/color_palettes/emerald.png": "283fc1f7c506b6e5d6b6f041b5ee4e59",
"assets/packages/tailwind_standards/assets/color_palettes/teal.png": "91af648d9319f492ddfe763a8f168072",
"assets/packages/tailwind_standards/assets/color_palettes/neutral.png": "16711bc25608ef93ef2713888d1c5caa",
"assets/packages/tailwind_standards/assets/color_palettes/gray.png": "5d07e0005b25c749cd4cc8e8e8e7b1e4",
"assets/packages/tailwind_standards/assets/color_palettes/lime.png": "bf34635bd238384706c938cb1da86f16",
"assets/packages/tailwind_standards/assets/color_palettes/rose.png": "0142b1599cade4fa132f0afcddc60b1f",
"assets/packages/tailwind_standards/assets/color_palettes/yellow.png": "bbc513c4edf55e04adfce07e99cc66b7",
"assets/packages/tailwind_standards/assets/color_palettes/amber.png": "049e0c556c1978f108ecc31bcbca0b21",
"assets/packages/tailwind_standards/assets/color_palettes/pink.png": "4f7dc9d4baeb5aeafeef4a0dd990c52c",
"assets/packages/tailwind_standards/assets/color_palettes/blue.png": "da47f1cfa7a8704c782b9821813dbba3",
"assets/packages/tailwind_standards/assets/color_palettes/orange.png": "8dc2b1ca31b7d3c09c048870fe42e3a9",
"assets/packages/tailwind_standards/assets/color_palettes/stone.png": "a426c8096b12ca7e41a4278fe05c5d4b",
"assets/packages/tailwind_standards/assets/color_palettes/slate.png": "6cba65c2e7b64b14dc381a2fa392e010",
"assets/packages/tailwind_standards/assets/color_palettes/violet.png": "e6b547defef168e3174aa0537388bc29",
"assets/packages/tailwind_standards/assets/color_palettes/green.png": "0d681576fc9976cf8aa0b25aac6f7c34",
"assets/packages/tailwind_standards/assets/color_palettes/sky.png": "768d06f566d4b309804d3dc5654bb49a",
"assets/packages/tailwind_standards/assets/color_palettes/indigo.png": "feb3441d6461a9d496ea00873baac5b3",
"assets/packages/tailwind_standards/assets/color_palettes/cyan.png": "94149f9e9d0a59a36fd2882503970bad",
"assets/packages/tailwind_standards/assets/color_palettes/zinc.png": "1c36768eb06d11f0a3fb006b2f6efd54",
"assets/packages/tailwind_standards/assets/color_palettes/red.png": "9ae556584c7f90cca6743f0f3b770a63",
"assets/packages/tailwind_standards/assets/color_palettes/purple.png": "e342c4b2174e37dc6b391a881c331552",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/half_page_with_illustration-svg2.svg": "eb9158bf3018768e817d7fd94d196fd8",
"assets/assets/svg/half_page_with_illustration-svg1.svg": "3ea6c9cdb4a1b520b2f1a89ac0c2e430",
"assets/assets/image/team.png": "083ec2dccd8eb0389c93119ee0e5a2cd",
"assets/assets/color_palettes/green/image3x1.png": "024d8aa71d620327ed48f1e0ff52d54b",
"assets/assets/color_palettes/green/image1x2.png": "1302fcbf446453afcad0aa61cc998c7c",
"assets/assets/color_palettes/green/image3x2.png": "802a36da56f3b35aec0f2b72b5a12ca3",
"assets/assets/color_palettes/green/image1x1.png": "f6e99980ff935b98c110a54953410f12",
"assets/assets/color_palettes/green/image5x1.png": "b42289d797ae27fcc03688251fe3fc62",
"assets/assets/color_palettes/green/image5x2.png": "53c72aaccc224cf9d4c292c8172fe9ec",
"assets/assets/color_palettes/green/image2x2.png": "cd4dd9e67425a40e82bad0e292638d42",
"assets/assets/color_palettes/green/image2x1.png": "2246153deebe153eff810b856aba7347",
"assets/assets/color_palettes/green/image4x2.png": "d23a93c5955330d22a64561b84c5ae38",
"assets/assets/color_palettes/green/image4x1.png": "a07236a8fabbf77492a965e6f1d37a92",
"assets/assets/color_palettes/gray/image3x1.png": "e2549c1503ee2f571337cc59d0e60a9d",
"assets/assets/color_palettes/gray/image1x2.png": "9c8c761788ce7fec61a3f5cf3ba3b2c3",
"assets/assets/color_palettes/gray/image3x2.png": "787d76c9a62bf8c82c09f0c28ec601f7",
"assets/assets/color_palettes/gray/image1x1.png": "7f21802379ae3ff0aa19d379c521f50d",
"assets/assets/color_palettes/gray/image5x1.png": "a1905115f5538dde574235138c27ff0d",
"assets/assets/color_palettes/gray/image5x2.png": "fb36ab63f2f0735da1d1431f4d86b444",
"assets/assets/color_palettes/gray/image2x2.png": "88c1abf3fba6768adbc5540ca3cc43a8",
"assets/assets/color_palettes/gray/image2x1.png": "aa201932485fcb8c5f069c384622469e",
"assets/assets/color_palettes/gray/image4x2.png": "a1f413c26914181b95072c1e0824ff20",
"assets/assets/color_palettes/gray/image4x1.png": "80a47367cdf7f567d857a7c44ad15192",
"assets/assets/color_palettes/sky/image3x1.png": "0ad390330de83573948475f2604724b9",
"assets/assets/color_palettes/sky/image1x2.png": "3e139c7f1056a18f4f780e0faceb9ae0",
"assets/assets/color_palettes/sky/image3x2.png": "ebaa5cca1a555409b2d66a902da2dd69",
"assets/assets/color_palettes/sky/image1x1.png": "839b3cd6e0321bf1fe9c63b55105eab9",
"assets/assets/color_palettes/sky/image5x1.png": "0749f4ec734d5fb0e1c8ef43617bdd9c",
"assets/assets/color_palettes/sky/image5x2.png": "b0ecd93cdcd81fa33576537e10354274",
"assets/assets/color_palettes/sky/image2x2.png": "7c808a27482bc1bdddd94ff8f9f203cf",
"assets/assets/color_palettes/sky/image2x1.png": "9fc029ace2692b17d524346cf9dfc401",
"assets/assets/color_palettes/sky/image4x2.png": "4cfeefb843c4ffd19102d1b1bff13051",
"assets/assets/color_palettes/sky/image4x1.png": "b8b997555496e96ccbc2c0ba55a32093",
"assets/assets/color_palettes/blue/image3x1.png": "c15f7fc4ef7cf9c24a89cd23c1d72070",
"assets/assets/color_palettes/blue/image1x2.png": "e50e757358d1d58278f8b1de10d31610",
"assets/assets/color_palettes/blue/image3x2.png": "c61ad240a53807df877bea1d15ef308f",
"assets/assets/color_palettes/blue/image1x1.png": "5018c1147982739656216bca2ed0f64b",
"assets/assets/color_palettes/blue/image5x1.png": "5ea44e12b787c0d631f185379498fa79",
"assets/assets/color_palettes/blue/image5x2.png": "4bcb177c9b9bf4e6bb3819cf4ae23ec9",
"assets/assets/color_palettes/blue/image2x2.png": "afc8faf171ab12a6cec936689a884a1f",
"assets/assets/color_palettes/blue/image2x1.png": "c72deff97739a24cfd778e124583dae4",
"assets/assets/color_palettes/blue/image4x2.png": "34db0163ed4536f92132789232a2eec2",
"assets/assets/color_palettes/blue/image4x1.png": "908e358cc62af865d7fba5fbd5691739",
"assets/assets/color_palettes/cyan/image3x1.png": "917837b8f303b63c1f49ab940e6b0bfa",
"assets/assets/color_palettes/cyan/image1x2.png": "5c514348b5a88e1d7fd31e2396d6bca5",
"assets/assets/color_palettes/cyan/image3x2.png": "63a1b4bedc21a2c90beb2e089e76fbcf",
"assets/assets/color_palettes/cyan/image1x1.png": "7a142a3a5a709b747caa88d0e9ef1e55",
"assets/assets/color_palettes/cyan/image5x1.png": "05406cba97b0330974d214a83c59f71d",
"assets/assets/color_palettes/cyan/image5x2.png": "1bfb28918711520d6ba05baf004b174d",
"assets/assets/color_palettes/cyan/image2x2.png": "5095c1940c433b06f5e341bbcf4438ef",
"assets/assets/color_palettes/cyan/image2x1.png": "f4fc6f183a40aa87b6708887eecdbf66",
"assets/assets/color_palettes/cyan/image4x2.png": "6660ee631e8c17ae6ffcf2d1ea1b9056",
"assets/assets/color_palettes/cyan/image4x1.png": "6435d83b8f836ea56e5d06b0bcc2d380",
"assets/assets/color_palettes/fuchsia/image3x1.png": "b297275aa0008d5a45f1a0b28548339c",
"assets/assets/color_palettes/fuchsia/image1x2.png": "50cc4d720f5e7ee01d8a14f95cb8a5b8",
"assets/assets/color_palettes/fuchsia/image3x2.png": "c91a01b691b2710560bff8ae4e4ac46f",
"assets/assets/color_palettes/fuchsia/image1x1.png": "8e59cf8845e1664d749dde132486c4d5",
"assets/assets/color_palettes/fuchsia/image5x1.png": "3a5741b30caa3ec79c3c269611d2c65c",
"assets/assets/color_palettes/fuchsia/image5x2.png": "2c12ed9ab57ee42fd7ec445706cffe72",
"assets/assets/color_palettes/fuchsia/image2x2.png": "2957ed743afad2b4d1f6e1840a25ee08",
"assets/assets/color_palettes/fuchsia/image2x1.png": "458e6cf2f1822907479762d13c0c6451",
"assets/assets/color_palettes/fuchsia/image4x2.png": "ef8f487441c261b3d478fe5ea0000161",
"assets/assets/color_palettes/fuchsia/image4x1.png": "4124a8f8f6cb1b5aee5440d73f70a968",
"assets/assets/color_palettes/rose/image3x1.png": "36b07566de6a978aac1031725a9d4794",
"assets/assets/color_palettes/rose/image1x2.png": "dd4b7caa7add0aaf8f5b4b535cc045f2",
"assets/assets/color_palettes/rose/image3x2.png": "7e4cfc50f70f03b34347d0ef06fea4e4",
"assets/assets/color_palettes/rose/image1x1.png": "c7ff505bcff6792c6b3bb2be8f438138",
"assets/assets/color_palettes/rose/image5x1.png": "b841fc7c6b905a3feae9d5ba637bf411",
"assets/assets/color_palettes/rose/image5x2.png": "526804e16e5296339a48ea6bf9d4c1b9",
"assets/assets/color_palettes/rose/image2x2.png": "f0313b28fc16cbe1a9740d854fbdedf5",
"assets/assets/color_palettes/rose/image2x1.png": "c11b8dd923a47f939eebc376a451688e",
"assets/assets/color_palettes/rose/image4x2.png": "bdf1e4905bf33fa7f29bd543701d5dba",
"assets/assets/color_palettes/rose/image4x1.png": "cba872f987897c61b41c9d11542e94b4",
"assets/assets/color_palettes/slate/image3x1.png": "840cba158681a9ec845e910edef91765",
"assets/assets/color_palettes/slate/image1x2.png": "97224ca570286884bfc1c1e65c12a916",
"assets/assets/color_palettes/slate/image3x2.png": "993a4615edc8a23cb862bc0b89912192",
"assets/assets/color_palettes/slate/image1x1.png": "e06f9774dfe0700fcef851802f221838",
"assets/assets/color_palettes/slate/image5x1.png": "0aee0ae6818be08c095321a63e982754",
"assets/assets/color_palettes/slate/image5x2.png": "d8eb1a6bd8f5fe451a3dbf605399c1c6",
"assets/assets/color_palettes/slate/image2x2.png": "5b7b91da4c6f2b5eebb508341075c524",
"assets/assets/color_palettes/slate/image2x1.png": "52db098c42788489cd39c4c681027b25",
"assets/assets/color_palettes/slate/image4x2.png": "0e9ccfd05e3609a8817edc79a08fe47d",
"assets/assets/color_palettes/slate/image4x1.png": "9f93647ad935f9031dd8ddc6dcf28fe3",
"assets/assets/color_palettes/indigo/image3x1.png": "a8943564a301fc58f7f3fa310c4e214e",
"assets/assets/color_palettes/indigo/image1x2.png": "6625ca6835f7739c4be5528dd7357e0a",
"assets/assets/color_palettes/indigo/image3x2.png": "2e27d41cb65e97562dfd79133e6b3fda",
"assets/assets/color_palettes/indigo/image1x1.png": "bfc3864b85d06f564fca4173e2dd13df",
"assets/assets/color_palettes/indigo/image5x1.png": "0e623459f1c0e8248559a3acaf600652",
"assets/assets/color_palettes/indigo/image5x2.png": "9850be27cf15000bcbfb8f836e2dae05",
"assets/assets/color_palettes/indigo/image2x2.png": "4c588cfbe5dfc43a94222dfda1c4c066",
"assets/assets/color_palettes/indigo/image2x1.png": "d0b2cbe9a20b9c3174bb20ce84121dfb",
"assets/assets/color_palettes/indigo/image4x2.png": "2155c198ffeeb72464f682763da16227",
"assets/assets/color_palettes/indigo/image4x1.png": "81f57f297428c689a974a01d86b270f1",
"assets/assets/color_palettes/pink/image3x1.png": "cb0c91bbd30204b566e250acdae067d4",
"assets/assets/color_palettes/pink/image1x2.png": "12f581c4c51e3989267a9b2b5c68502e",
"assets/assets/color_palettes/pink/image3x2.png": "b9ce623f3201acfb6b8773bcdf392322",
"assets/assets/color_palettes/pink/image1x1.png": "bc39ddedb8f3012b843dc76f4965d251",
"assets/assets/color_palettes/pink/image5x1.png": "9111f8032ee3751f7a46bbb3cddf782d",
"assets/assets/color_palettes/pink/image5x2.png": "c79a91b39e616f3498fce050bf2c7e84",
"assets/assets/color_palettes/pink/image2x2.png": "226de8c1907d4557318fbefd83c926db",
"assets/assets/color_palettes/pink/image2x1.png": "27b4e69c0a7e4994e1740533c1bbe96b",
"assets/assets/color_palettes/pink/image4x2.png": "1c088b05b8146ad443e5fb7fad422719",
"assets/assets/color_palettes/pink/image4x1.png": "45133fd17593884f2e8839538fa02258",
"assets/assets/color_palettes/red/image3x1.png": "49afa04cb3719b7ace653a7ab90158a3",
"assets/assets/color_palettes/red/image1x2.png": "61dbfba7918d35052299d753e18ba63b",
"assets/assets/color_palettes/red/image3x2.png": "be4fb0f5c6227d24f6c67e48851cae3d",
"assets/assets/color_palettes/red/image1x1.png": "39cf8d1808a2510f67ee9e3c7d59ad1a",
"assets/assets/color_palettes/red/image5x1.png": "c7e2195ef0e17ee8759c643474bc9337",
"assets/assets/color_palettes/red/image5x2.png": "75bf2411c36268c383447500f5d6aa4a",
"assets/assets/color_palettes/red/image2x2.png": "1483592b1ff9f5b165a225ddfec31ad9",
"assets/assets/color_palettes/red/image2x1.png": "0f0be9430f4881e1af0f48a1771c28cc",
"assets/assets/color_palettes/red/image4x2.png": "07410dd6930a842b4b70a8f9b9ce22b0",
"assets/assets/color_palettes/red/image4x1.png": "c58aa23345a7d9429c1aabd66ad2f318",
"assets/assets/color_palettes/neutral/image3x1.png": "310967688ab7325f318ea23f8bee56cf",
"assets/assets/color_palettes/neutral/image1x2.png": "f3071d0060e5334bae1e44133574eaa2",
"assets/assets/color_palettes/neutral/image3x2.png": "206ca3127692096f9383a45002371395",
"assets/assets/color_palettes/neutral/image1x1.png": "9f7ec01be0bcb5f8d11e8b3fc3064976",
"assets/assets/color_palettes/neutral/image5x1.png": "51005298129b8de8737f31a6fceee5f3",
"assets/assets/color_palettes/neutral/image5x2.png": "289d9d9f50d82759dc1653eb652e18a3",
"assets/assets/color_palettes/neutral/image2x2.png": "a108daf57417382851a02fb92e5cafcd",
"assets/assets/color_palettes/neutral/image2x1.png": "7f9e7a1b2a577610c5518896a46ef7d8",
"assets/assets/color_palettes/neutral/image4x2.png": "4614f79f353100b9081b8cb70a7e077c",
"assets/assets/color_palettes/neutral/image4x1.png": "3fbb213360673e3188bbae2eb1decd3a",
"assets/assets/color_palettes/teal/image3x1.png": "db677ecfb319bd1cd933d6243ff82c6f",
"assets/assets/color_palettes/teal/image1x2.png": "8a687caea9939aafd33c8388bd596ab7",
"assets/assets/color_palettes/teal/image3x2.png": "c334725fedc9f8412be0f88c6a43063a",
"assets/assets/color_palettes/teal/image1x1.png": "b40e15b0dad91d34728aa6cc9862ba52",
"assets/assets/color_palettes/teal/image5x1.png": "c31f6de6645aecceb488e9b51ff5ec39",
"assets/assets/color_palettes/teal/image5x2.png": "d5b2cca6b71272d3a09767b1f45ee14a",
"assets/assets/color_palettes/teal/image2x2.png": "b193f292f7ca61a4baeca8be8d43c3fe",
"assets/assets/color_palettes/teal/image2x1.png": "fb7d8c4fff168809682b72740433d79a",
"assets/assets/color_palettes/teal/image4x2.png": "0aa7b9f21efd0da3a76ba423b1281857",
"assets/assets/color_palettes/teal/image4x1.png": "b016a303a1e34dceba17591feae0349c",
"assets/assets/color_palettes/amber/image3x1.png": "709de9892e1f6a9db5bc88cc6cf2861f",
"assets/assets/color_palettes/amber/image1x2.png": "98c1d0227ebf17d5a3c67ca478cb2297",
"assets/assets/color_palettes/amber/image3x2.png": "f1bb73005e6a97cc20feb002ecbb1f9b",
"assets/assets/color_palettes/amber/image1x1.png": "f9a5cf444ea19163d04a85af582dd87d",
"assets/assets/color_palettes/amber/image5x1.png": "5f3e9c03374ea9a7c41d8fcf0b9d6f68",
"assets/assets/color_palettes/amber/image5x2.png": "6e4e22f59c092d183e79b3b05a2508fa",
"assets/assets/color_palettes/amber/image2x2.png": "60122aa4e86d55f3351580e470bb2015",
"assets/assets/color_palettes/amber/image2x1.png": "9557a8d059c3c3a731b416b79d0392b6",
"assets/assets/color_palettes/amber/image4x2.png": "7edefe558a167bdf3f5319f5f5f47b44",
"assets/assets/color_palettes/amber/image4x1.png": "43b9c92e824dcd5df990fe8c03c8d284",
"assets/assets/color_palettes/lime/image3x1.png": "db4e4787bf136dde9f9450dea93ddbbf",
"assets/assets/color_palettes/lime/image1x2.png": "287bfbd97a265921f62b0b57115c8d01",
"assets/assets/color_palettes/lime/image3x2.png": "0cfa494f89078abfe81ca90e7dd916ca",
"assets/assets/color_palettes/lime/image1x1.png": "2c971aeaaf1a57364d4f4be53e8dbbf0",
"assets/assets/color_palettes/lime/image5x1.png": "03d60e1b022f1466ae0aa955d64d78a6",
"assets/assets/color_palettes/lime/image5x2.png": "5f9776d5fdd35cd0d087ff3086bac39a",
"assets/assets/color_palettes/lime/image2x2.png": "74fd8acad37b6e5b91a4dbea773ca2a8",
"assets/assets/color_palettes/lime/image2x1.png": "86878fe2b0dbfcc936b63e708d1d884d",
"assets/assets/color_palettes/lime/image4x2.png": "ae048990f6c69f711201d5206b789098",
"assets/assets/color_palettes/lime/image4x1.png": "0027070b1bea18a5bbd636e23e3ec794",
"assets/assets/color_palettes/violet/image3x1.png": "eb72a25471b96b10d7de1109cc59137d",
"assets/assets/color_palettes/violet/image1x2.png": "136477043fdcbef9021ce5f113cfd9e7",
"assets/assets/color_palettes/violet/image3x2.png": "4aa20c73ffc629431b818932c93f6ea5",
"assets/assets/color_palettes/violet/image1x1.png": "17a06bb958ccd387e60859607eb79c4f",
"assets/assets/color_palettes/violet/image5x1.png": "63f1fa226e5a073bb0887ce63253ecff",
"assets/assets/color_palettes/violet/image5x2.png": "accf5fdae896101d8da8393303486d9e",
"assets/assets/color_palettes/violet/image2x2.png": "d928edb1fc3f07f84b6188c30e5b122e",
"assets/assets/color_palettes/violet/image2x1.png": "1f0e2cea73aa110046e831c3dc8e3ca0",
"assets/assets/color_palettes/violet/image4x2.png": "3732c2157db318cb41d6fd823e3aacf6",
"assets/assets/color_palettes/violet/image4x1.png": "d3cdcd9cf964663ac99ffde9381afb49",
"assets/assets/color_palettes/stone/image3x1.png": "54610bc13babfbed0eeb6c71b72b57d9",
"assets/assets/color_palettes/stone/image1x2.png": "25d5a42143b161faa52f0a919dbd5db4",
"assets/assets/color_palettes/stone/image3x2.png": "56bc35b6ba43ad755f6b58966af4f522",
"assets/assets/color_palettes/stone/image1x1.png": "c379aaab94c8c64cd402c44d310ae3d5",
"assets/assets/color_palettes/stone/image5x1.png": "e67be7bbfd185bf0f006812c11c96ba5",
"assets/assets/color_palettes/stone/image5x2.png": "c97e4e971d36f63cb76c27add548466c",
"assets/assets/color_palettes/stone/image2x2.png": "08c01d9fff96dd31b8112820dc7326d1",
"assets/assets/color_palettes/stone/image2x1.png": "f681441c9f9334d49baa58f561e98ef5",
"assets/assets/color_palettes/stone/image4x2.png": "1f37d8b043056444d27a83c746e2fb88",
"assets/assets/color_palettes/stone/image4x1.png": "fd08b0522fe8680f573aee3349856d72",
"assets/assets/color_palettes/yellow/image3x1.png": "46cdd98bf9919b7d47a85815ded7967b",
"assets/assets/color_palettes/yellow/image1x2.png": "b03768841f77ec2519cdc6ada1957c85",
"assets/assets/color_palettes/yellow/image3x2.png": "e6183ccb8c5b328a8b22852963cf738f",
"assets/assets/color_palettes/yellow/image1x1.png": "995812c04c4dccc07b6a6789c0a6965b",
"assets/assets/color_palettes/yellow/image5x1.png": "3049ffade9f1293338000e8b82d30218",
"assets/assets/color_palettes/yellow/image5x2.png": "6a6d73241ab27a327728381a081ce608",
"assets/assets/color_palettes/yellow/image2x2.png": "34b66143503ace613d7d37fcad6d8ee6",
"assets/assets/color_palettes/yellow/image2x1.png": "619580c0c8520a00b6240e3670393208",
"assets/assets/color_palettes/yellow/image4x2.png": "b5a9a24093048f357e7f7beca8538485",
"assets/assets/color_palettes/yellow/image4x1.png": "79071a8264e8f5bee98416347124aeaf",
"assets/assets/color_palettes/zinc/image3x1.png": "00a3bafe78df91d864d7da01b73f765f",
"assets/assets/color_palettes/zinc/image1x2.png": "41d697edd68fd86c3b9f1e883323f6a0",
"assets/assets/color_palettes/zinc/image3x2.png": "2f5761b5807d34e3e796e71ab144a1f3",
"assets/assets/color_palettes/zinc/image1x1.png": "fc4323780db090ead1e225e40a2261b4",
"assets/assets/color_palettes/zinc/image5x1.png": "cb46e9148f63fd78dc35235da2e5a2b8",
"assets/assets/color_palettes/zinc/image5x2.png": "090a647aa50e0e8ede165ffd6f640748",
"assets/assets/color_palettes/zinc/image2x2.png": "17b71b0500afc6cab0ca03c60ce0d0e3",
"assets/assets/color_palettes/zinc/image2x1.png": "18959c12762189178b7e8ee52753f22d",
"assets/assets/color_palettes/zinc/image4x2.png": "dc3ede84d50a93cdc4992b675442da02",
"assets/assets/color_palettes/zinc/image4x1.png": "3779b2574b0caab4ae1fda6be771f789",
"assets/assets/color_palettes/emerald/image3x1.png": "4ab78ec2661b5f3bc4dd46c7cce97c65",
"assets/assets/color_palettes/emerald/image1x2.png": "157b400afe7894fa08649f91107f3591",
"assets/assets/color_palettes/emerald/image3x2.png": "698e08be901090b08aee651ef66e604c",
"assets/assets/color_palettes/emerald/image1x1.png": "ca5502218ec34c24b40c78f0b1c48a63",
"assets/assets/color_palettes/emerald/image5x1.png": "b3d5f7ccdb717acdcf15cc881f918b0f",
"assets/assets/color_palettes/emerald/image5x2.png": "a9fbf6afa5c669b9529a3a180a6125d3",
"assets/assets/color_palettes/emerald/image2x2.png": "03f192a2ecad8d307b67115a0c1a51f8",
"assets/assets/color_palettes/emerald/image2x1.png": "6b41f21e9d9c20387649b2c2bb070378",
"assets/assets/color_palettes/emerald/image4x2.png": "e00bec20148dee84794dc71bafe32c5d",
"assets/assets/color_palettes/emerald/image4x1.png": "a5e4dd5221d4bbe1336d54a3c89e2c36",
"assets/assets/color_palettes/orange/image3x1.png": "d8504c14f3450a8c025ee21036024693",
"assets/assets/color_palettes/orange/image1x2.png": "84c25119859e99cd7926a11273ce0f2d",
"assets/assets/color_palettes/orange/image3x2.png": "312764f2ca1f7ff80a03b721aeef79d4",
"assets/assets/color_palettes/orange/image1x1.png": "afe89949827702bb453d7a1634534d66",
"assets/assets/color_palettes/orange/image5x1.png": "32d1a5a361133153d38c1727b7f66f7c",
"assets/assets/color_palettes/orange/image5x2.png": "6ccf74e20b48e79d697a78a6c08c6dc0",
"assets/assets/color_palettes/orange/image2x2.png": "f0c169a9b0435e409240a38d1ad4dea4",
"assets/assets/color_palettes/orange/image2x1.png": "0c70990f7aa6b09e6313061c8c5ef7f7",
"assets/assets/color_palettes/orange/image4x2.png": "3d400c87fd18637185a7757dedb27992",
"assets/assets/color_palettes/orange/image4x1.png": "46022917ab40ebb9c061c7b3adda7e1a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
