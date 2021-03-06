// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  x: [450, 474, 550, 570, 574, 577, 604, 608, 624, 628, 632, 633, 636, 640, 645, 656, 657, 665, 669, 671, 673, 685, 687, 689, 693, 695, 697, 699, 705, 707, 712, 715, 718, 724, 727, 728, 732, 734, 735, 740, 741, 751, 755, 758, 759, 762, 772, 775, 776, 780, 781, 783, 786, 788, 792, 794, 798, 799, 801, 815, 817, 818, 823, 827, 829, 830, 831, 840, 847, 851, 852, 853, 857, 861, 867, 871, 894, 900, 901, 912, 914, 915, 919, 949, 951, 965, 966, 967, 975, 979, 1002, 1065], 
  y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 4, 1, 1, 2, 1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  fill: 'toself', 
  fillcolor: 'rgb(28, 74, 175)', 
  marker: {color: 'rgb(28, 74, 175)'}, 
  mode: 'lines', 
  name: 'World Series Winners', 
  type: 'scatter', 
  uid: '123e9d58-8f7e-11e8-bc85-f40f24351765', 
  xsrc: 'knishina:11:4fd8e0', 
  ysrc: 'knishina:11:c4f099'
};
trace2 = {
  x: [329, 348, 360, 370, 371, 377, 378, 380, 382, 394, 395, 397, 407, 408, 412, 419, 421, 424, 426, 427, 429, 430, 431, 435, 441, 443, 444, 446, 447, 451, 452, 454, 457, 458, 459, 461, 463, 464, 465, 466, 468, 470, 472, 473, 476, 479, 480, 483, 484, 486, 487, 488, 489, 491, 492, 493, 494, 495, 496, 497, 498, 501, 502, 503, 504, 505, 506, 510, 511, 512, 513, 514, 515, 516, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 825, 826, 827, 828, 829, 830, 831, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 847, 848, 849, 850, 851, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 870, 871, 872, 874, 875, 876, 877, 878, 879, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 896, 897, 898, 899, 900, 901, 902, 903, 904, 906, 907, 908, 910, 920, 921, 923, 925, 926, 927, 928, 930, 935, 938, 940, 944, 945, 947, 948, 949, 950, 952, 955, 958, 959, 961, 968, 978, 981, 982, 993, 998, 1004, 1009, 1027, 1062, 1067], 
  y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 2, 3, 5, 2, 1, 2, 2, 2, 1, 4, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 4, 2, 3, 3, 2, 2, 3, 1, 2, 2, 1, 2, 3, 3, 2, 3, 1, 2, 3, 2, 3, 2, 2, 1, 3, 2, 2, 1, 2, 5, 3, 4, 3, 1, 5, 1, 2, 5, 6, 3, 3, 2, 2, 3, 4, 2, 2, 1, 4, 1, 4, 1, 5, 3, 1, 3, 2, 6, 7, 4, 2, 2, 4, 3, 4, 1, 2, 5, 3, 6, 6, 3, 3, 8, 5, 4, 1, 1, 6, 5, 2, 2, 4, 6, 8, 5, 5, 4, 5, 5, 6, 6, 4, 6, 2, 4, 4, 9, 4, 7, 3, 4, 1, 4, 4, 9, 2, 3, 5, 3, 6, 7, 8, 6, 9, 12, 3, 8, 5, 11, 4, 3, 5, 7, 6, 7, 6, 4, 5, 9, 4, 7, 10, 8, 10, 6, 5, 8, 5, 11, 8, 9, 9, 8, 7, 4, 6, 5, 9, 7, 9, 13, 9, 4, 13, 5, 9, 7, 3, 7, 6, 3, 11, 10, 6, 7, 10, 17, 11, 12, 7, 7, 6, 12, 6, 14, 9, 8, 5, 8, 8, 12, 19, 12, 14, 7, 12, 9, 6, 8, 12, 16, 7, 12, 8, 6, 9, 5, 7, 9, 8, 9, 7, 9, 12, 9, 11, 14, 15, 6, 8, 6, 9, 11, 14, 6, 7, 5, 10, 7, 13, 4, 10, 9, 13, 6, 6, 3, 2, 15, 12, 9, 6, 8, 7, 15, 8, 7, 13, 8, 8, 8, 7, 9, 9, 5, 9, 13, 6, 7, 9, 6, 5, 7, 2, 12, 7, 8, 10, 5, 4, 5, 3, 2, 7, 4, 4, 8, 9, 4, 8, 5, 9, 5, 6, 8, 6, 4, 4, 5, 6, 2, 5, 7, 4, 3, 6, 4, 1, 6, 5, 5, 3, 5, 4, 5, 4, 3, 9, 6, 5, 5, 4, 4, 9, 5, 3, 6, 2, 6, 4, 5, 2, 3, 5, 1, 2, 7, 3, 1, 6, 3, 3, 6, 2, 3, 1, 3, 6, 2, 7, 1, 1, 3, 3, 2, 1, 1, 4, 4, 4, 2, 2, 5, 6, 1, 3, 3, 3, 2, 1, 4, 2, 2, 2, 5, 2, 3, 2, 1, 1, 6, 1, 3, 2, 1, 1, 3, 1, 2, 2, 3, 1, 2, 3, 1, 1, 1, 2, 2, 1, 3, 4, 2, 1, 2, 2, 5, 1, 2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2, 2, 3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  fill: 'toself', 
  marker: {color: 'rgba(192, 57, 43, 0.5)'}, 
  mode: 'lines', 
  name: 'Non-World Series Winning Teams', 
  type: 'scatter', 
  uid: '123f9058-8f7e-11e8-af40-f40f24351765', 
  xsrc: 'knishina:11:86edd7', 
  ysrc: 'knishina:11:0a832c'
};
data = [trace1, trace2];
layout = {
  barmode: 'group', 
  title: 'World Series Runs (1905-2015)', 
  xaxis: {title: 'Runs'}, 
  yaxis: {title: 'Frequency'}
};
Plotly.plot('plotly-div5', {
  data: data,
  layout: layout
});