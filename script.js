function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  woody(ctx);
}

function woody(ctx) {
  
  if ($('#line_width').val() != " "){
    var line_width = parseInt($('#line_width').val());
  }
  else{
    var line_width = 1 
  }
  
  var stroke_color = $('#color').val();
  
  // woody/Path
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(693.9, 329.4);
  ctx.bezierCurveTo(730.9, 326.4, 759.9, 318.4, 794.9, 327.4);
  ctx.strokeStyle= stroke_color;
  ctx.lineWidth = line_width;
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(791.9, 328.4);
  ctx.bezierCurveTo(811.9, 328.4, 796.9, 391.4, 789.9, 402.4);
  ctx.bezierCurveTo(774.9, 423.4, 731.9, 428.4, 708.9, 420.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(708.9, 420.4);
  ctx.bezierCurveTo(694.9, 403.4, 670.9, 347.4, 695.9, 329.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(684.9, 339.4);
  ctx.bezierCurveTo(694.9, 337.4, 701.9, 329.4, 711.9, 329.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(693.9, 333.4);
  ctx.bezierCurveTo(695.9, 333.4, 697.9, 333.4, 699.9, 331.4);
  ctx.bezierCurveTo(696.9, 332.4, 693.9, 333.4, 689.9, 334.4);
  ctx.bezierCurveTo(693.9, 334.4, 696.9, 332.4, 700.9, 331.4);
  ctx.bezierCurveTo(699.9, 331.4, 698.9, 331.4, 697.9, 331.4);
  ctx.bezierCurveTo(698.9, 329.4, 700.9, 330.4, 701.9, 328.4);
  ctx.bezierCurveTo(699.9, 329.4, 697.9, 329.4, 694.9, 330.4);
  ctx.bezierCurveTo(698.9, 330.4, 702.9, 330.4, 706.9, 329.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(695.9, 332.4);
  ctx.bezierCurveTo(692.9, 333.4, 689.9, 334.4, 687.9, 336.4);
  ctx.bezierCurveTo(689.9, 333.4, 691.9, 332.4, 694.9, 330.4);
  ctx.bezierCurveTo(692.9, 332.4, 691.9, 334.4, 687.9, 337.4);
  ctx.bezierCurveTo(690.9, 333.4, 693.9, 332.4, 697.9, 330.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(690.9, 332.4);
  ctx.bezierCurveTo(689.9, 335.4, 690.9, 335.4, 692.9, 333.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(707.9, 327.4);
  ctx.bezierCurveTo(732.9, 322.4, 767.9, 319.4, 791.9, 327.4);
  ctx.bezierCurveTo(792.9, 328.4, 789.9, 328.4, 789.9, 328.4);
  ctx.bezierCurveTo(794.9, 330.4, 795.9, 332.4, 799.9, 335.4);
  ctx.bezierCurveTo(792.9, 330.4, 785.9, 322.4, 776.9, 323.4);
  ctx.bezierCurveTo(785.9, 327.4, 797.9, 330.4, 798.9, 343.4);
  ctx.bezierCurveTo(797.9, 339.4, 796.9, 336.4, 794.9, 332.4);
  ctx.bezierCurveTo(795.9, 336.4, 797.9, 339.4, 798.9, 343.4);
  ctx.bezierCurveTo(798.9, 341.4, 798.9, 339.4, 798.9, 337.4);
  ctx.bezierCurveTo(799.9, 340.4, 799.9, 342.4, 800.9, 344.4);
  ctx.bezierCurveTo(799.9, 345.4, 798.9, 343.4, 798.9, 343.4);
  ctx.bezierCurveTo(798.9, 347.4, 798.9, 350.4, 799.9, 354.4);
  ctx.bezierCurveTo(798.9, 351.4, 798.9, 348.4, 798.9, 345.4);
  ctx.bezierCurveTo(799.9, 346.4, 800.9, 348.4, 799.9, 349.4);
  ctx.bezierCurveTo(800.9, 348.4, 798.9, 345.4, 799.9, 347.4);
  ctx.bezierCurveTo(799.9, 352.4, 799.9, 357.4, 798.9, 362.4);
  ctx.bezierCurveTo(796.9, 353.4, 799.9, 344.4, 799.9, 335.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(796.9, 361.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(796.9, 356.4);
  ctx.bezierCurveTo(797.9, 361.4, 797.9, 367.4, 797.9, 372.4);
  ctx.bezierCurveTo(798.9, 369.4, 798.9, 366.4, 799.9, 363.4);
  ctx.bezierCurveTo(799.9, 364.4, 799.9, 366.4, 799.9, 367.4);
  ctx.bezierCurveTo(801.9, 359.4, 801.9, 351.4, 802.9, 344.4);
  ctx.bezierCurveTo(806.9, 352.4, 803.9, 361.4, 800.9, 368.4);
  ctx.bezierCurveTo(798.9, 361.4, 800.9, 353.4, 802.9, 347.4);
  ctx.bezierCurveTo(804.9, 353.4, 802.9, 359.4, 800.9, 365.4);
  ctx.bezierCurveTo(801.9, 358.4, 804.9, 352.4, 806.9, 346.4);
  ctx.bezierCurveTo(807.9, 352.4, 805.9, 360.4, 801.9, 366.4);
  ctx.bezierCurveTo(803.9, 359.4, 806.9, 352.4, 809.9, 345.4);
  ctx.bezierCurveTo(808.9, 352.4, 807.9, 359.4, 803.9, 365.4);
  ctx.bezierCurveTo(804.9, 359.4, 806.9, 353.4, 809.9, 347.4);
  ctx.bezierCurveTo(808.9, 352.4, 807.9, 357.4, 805.9, 361.4);
  ctx.bezierCurveTo(805.9, 356.4, 807.9, 352.4, 810.9, 347.4);
  ctx.bezierCurveTo(811.9, 353.4, 809.9, 359.4, 805.9, 363.4);
  ctx.bezierCurveTo(805.9, 359.4, 805.9, 355.4, 806.9, 351.4);
  ctx.lineTo(807.9, 354.4);
  ctx.bezierCurveTo(806.9, 353.4, 806.9, 350.4, 805.9, 349.4);
  ctx.bezierCurveTo(806.9, 350.4, 806.9, 354.4, 806.9, 355.4);
  ctx.bezierCurveTo(804.9, 348.4, 802.9, 340.4, 795.9, 335.4);
  ctx.bezierCurveTo(796.9, 338.4, 797.9, 341.4, 799.9, 344.4);
  ctx.bezierCurveTo(798.9, 342.4, 797.9, 339.4, 797.9, 337.4);
  ctx.bezierCurveTo(800.9, 345.4, 799.9, 351.4, 804.9, 357.4);
  ctx.bezierCurveTo(805.9, 355.4, 806.9, 353.4, 807.9, 350.4);
  ctx.bezierCurveTo(808.9, 354.4, 807.9, 354.4, 806.9, 358.4);
  ctx.bezierCurveTo(805.9, 357.4, 805.9, 354.4, 805.9, 353.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(691.9, 335.9);
  ctx.bezierCurveTo(693.4, 334.9, 694.4, 333.9, 695.9, 333.4);
  ctx.bezierCurveTo(691.4, 336.4, 686.9, 336.4, 684.4, 341.4);
  ctx.bezierCurveTo(684.4, 340.4, 684.4, 339.4, 684.4, 337.9);
  ctx.bezierCurveTo(684.4, 339.4, 683.9, 340.9, 683.9, 342.4);
  ctx.bezierCurveTo(684.9, 338.9, 686.4, 334.9, 688.4, 331.4);
  ctx.bezierCurveTo(687.4, 334.9, 685.9, 338.9, 684.9, 342.9);
  ctx.bezierCurveTo(685.9, 338.4, 688.4, 333.4, 691.4, 329.9);
  ctx.bezierCurveTo(690.9, 330.4, 689.9, 332.9, 688.9, 333.9);
  ctx.bezierCurveTo(693.4, 331.4, 698.4, 329.9, 703.4, 328.4);
  ctx.bezierCurveTo(697.4, 329.4, 690.9, 330.9, 685.4, 330.4);
  ctx.bezierCurveTo(687.9, 328.9, 690.9, 327.9, 693.9, 327.9);
  ctx.bezierCurveTo(692.4, 328.9, 690.9, 330.9, 688.9, 331.9);
  ctx.bezierCurveTo(692.9, 330.4, 697.4, 328.9, 701.9, 327.9);
  ctx.bezierCurveTo(699.4, 328.4, 696.9, 328.9, 694.4, 329.4);
  ctx.bezierCurveTo(699.9, 327.9, 705.4, 326.4, 710.9, 324.9);
  ctx.bezierCurveTo(704.9, 325.9, 699.4, 326.9, 693.4, 327.4);
  ctx.bezierCurveTo(700.9, 326.4, 707.9, 325.9, 715.4, 325.4);
  ctx.bezierCurveTo(709.4, 326.4, 703.4, 327.9, 697.4, 328.9);
  ctx.bezierCurveTo(701.4, 326.9, 705.9, 325.9, 710.4, 324.9);
  ctx.bezierCurveTo(707.4, 326.4, 704.4, 327.4, 701.4, 329.4);
  ctx.bezierCurveTo(703.9, 328.9, 706.4, 328.4, 708.4, 327.9);
  ctx.bezierCurveTo(706.9, 328.4, 705.4, 328.4, 703.9, 328.4);
  ctx.bezierCurveTo(706.9, 327.4, 709.9, 326.4, 712.9, 325.9);
  ctx.bezierCurveTo(710.9, 327.4, 709.4, 328.4, 706.4, 328.9);
  ctx.bezierCurveTo(707.9, 327.9, 709.9, 327.4, 711.4, 326.9);
  ctx.bezierCurveTo(708.9, 327.4, 711.4, 327.4, 711.4, 328.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(699.4, 328.4);
  ctx.bezierCurveTo(694.9, 328.4, 690.9, 328.4, 686.9, 328.9);
  ctx.bezierCurveTo(690.4, 328.4, 693.4, 327.9, 696.9, 327.4);
  ctx.bezierCurveTo(694.4, 327.9, 691.9, 328.4, 689.4, 328.9);
  ctx.bezierCurveTo(696.4, 327.4, 703.9, 325.4, 710.9, 324.9);
  ctx.bezierCurveTo(698.4, 332.4, 685.9, 323.9, 679.9, 340.9);
  ctx.bezierCurveTo(681.9, 336.4, 683.9, 330.4, 688.9, 328.9);
  ctx.bezierCurveTo(689.4, 332.9, 685.4, 336.4, 683.9, 339.9);
  ctx.bezierCurveTo(683.4, 336.4, 685.4, 333.4, 686.9, 330.9);
  ctx.bezierCurveTo(682.9, 333.4, 678.9, 336.4, 678.4, 341.4);
  ctx.bezierCurveTo(679.9, 339.4, 681.9, 337.9, 682.9, 335.4);
  ctx.bezierCurveTo(681.9, 338.4, 680.4, 341.4, 678.9, 344.4);
  ctx.bezierCurveTo(679.9, 341.4, 681.9, 338.9, 683.4, 335.9);
  ctx.bezierCurveTo(681.4, 338.9, 680.4, 342.9, 679.9, 346.4);
  ctx.bezierCurveTo(679.9, 344.4, 679.4, 342.9, 679.4, 340.9);
  ctx.bezierCurveTo(678.9, 340.9, 678.9, 342.4, 678.4, 342.9);
  ctx.bezierCurveTo(678.4, 341.9, 678.4, 340.4, 678.4, 339.4);
  ctx.bezierCurveTo(678.4, 340.9, 678.9, 342.9, 678.9, 344.4);
  ctx.bezierCurveTo(679.9, 342.4, 681.9, 339.9, 683.4, 338.4);
  ctx.bezierCurveTo(683.4, 340.4, 682.9, 343.4, 682.4, 345.4);
  ctx.bezierCurveTo(681.9, 342.4, 682.4, 339.9, 683.9, 337.9);
  ctx.bezierCurveTo(683.9, 340.4, 683.4, 342.9, 682.4, 344.9);
  ctx.bezierCurveTo(682.9, 343.4, 684.4, 341.9, 684.9, 340.4);
  ctx.bezierCurveTo(685.4, 341.9, 684.9, 342.9, 684.9, 344.4);
  ctx.bezierCurveTo(685.4, 344.4, 684.9, 342.4, 684.4, 342.9);
  ctx.lineTo(682.9, 345.4);
  ctx.bezierCurveTo(683.4, 342.9, 683.9, 340.9, 684.9, 338.9);
  ctx.bezierCurveTo(684.9, 339.9, 684.4, 341.4, 684.4, 342.4);
  ctx.bezierCurveTo(683.4, 337.4, 687.9, 334.9, 691.4, 331.9);
  ctx.bezierCurveTo(688.4, 331.9, 687.9, 330.4, 686.4, 329.9);
  ctx.bezierCurveTo(688.4, 328.9, 690.4, 328.4, 691.9, 327.9);
  ctx.bezierCurveTo(691.4, 331.9, 686.9, 331.9, 689.9, 328.9);
  ctx.bezierCurveTo(689.4, 328.9, 687.9, 329.4, 687.9, 329.9);
  ctx.bezierCurveTo(692.4, 328.9, 695.9, 331.4, 699.4, 330.9);
  ctx.bezierCurveTo(702.4, 330.4, 705.4, 328.4, 708.4, 327.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(793.4, 326.9);
  ctx.bezierCurveTo(794.9, 328.4, 795.9, 329.9, 796.4, 331.9);
  ctx.bezierCurveTo(795.4, 331.4, 793.9, 330.9, 792.9, 329.9);
  ctx.bezierCurveTo(795.9, 332.9, 797.9, 336.4, 799.9, 339.9);
  ctx.bezierCurveTo(799.4, 337.4, 798.9, 334.9, 798.4, 332.4);
  ctx.bezierCurveTo(799.4, 334.9, 800.4, 337.4, 799.9, 339.9);
  ctx.bezierCurveTo(798.4, 335.4, 799.9, 328.9, 793.4, 328.4);
  ctx.bezierCurveTo(793.9, 329.4, 794.9, 330.4, 795.4, 330.9);
  ctx.bezierCurveTo(794.9, 330.4, 794.4, 329.4, 793.9, 328.4);
  ctx.bezierCurveTo(794.4, 327.9, 795.9, 328.4, 795.9, 328.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(809.9, 357.4);
  ctx.bezierCurveTo(806.4, 372.9, 804.9, 389.4, 796.9, 402.9);
  ctx.bezierCurveTo(796.9, 399.9, 797.4, 397.9, 799.4, 396.4);
  ctx.bezierCurveTo(798.4, 404.4, 788.9, 407.9, 784.9, 413.9);
  ctx.bezierCurveTo(787.4, 410.4, 790.9, 407.9, 794.4, 405.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(789.9, 408.9);
  ctx.bezierCurveTo(771.4, 428.9, 719.9, 442.4, 698.9, 417.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(800.9, 365.4);
  ctx.bezierCurveTo(800.9, 369.9, 799.9, 374.4, 798.9, 378.4);
  ctx.bezierCurveTo(799.9, 374.4, 800.9, 369.9, 801.9, 365.9);
  ctx.bezierCurveTo(801.9, 369.9, 801.4, 373.9, 800.4, 377.9);
  ctx.bezierCurveTo(800.9, 373.9, 801.9, 369.4, 803.4, 364.9);
  ctx.bezierCurveTo(803.9, 369.4, 802.4, 374.4, 800.9, 378.9);
  ctx.bezierCurveTo(801.4, 374.4, 802.9, 369.9, 803.9, 365.9);
  ctx.bezierCurveTo(804.4, 368.4, 804.4, 371.4, 803.9, 373.9);
  ctx.bezierCurveTo(803.9, 369.9, 803.9, 365.9, 804.9, 361.9);
  ctx.bezierCurveTo(804.4, 364.4, 804.4, 366.4, 803.9, 368.4);
  ctx.bezierCurveTo(804.4, 365.9, 805.9, 363.9, 806.9, 361.9);
  ctx.bezierCurveTo(807.4, 364.4, 807.4, 366.4, 806.9, 368.9);
  ctx.bezierCurveTo(806.9, 367.9, 806.4, 366.4, 806.4, 365.4);
  ctx.bezierCurveTo(805.4, 369.4, 804.9, 373.4, 803.4, 376.9);
  ctx.bezierCurveTo(804.4, 374.4, 804.9, 371.4, 805.4, 368.4);
  ctx.bezierCurveTo(803.9, 374.9, 803.4, 384.4, 799.4, 389.4);
  ctx.bezierCurveTo(798.9, 385.9, 799.4, 382.4, 800.4, 378.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(808.4, 353.9);
  ctx.bezierCurveTo(804.9, 369.4, 804.4, 387.4, 794.4, 400.4);
  ctx.bezierCurveTo(796.9, 391.4, 799.9, 382.4, 804.4, 373.9);
  ctx.bezierCurveTo(804.4, 379.9, 801.4, 385.9, 799.4, 391.9);
  ctx.bezierCurveTo(799.4, 388.4, 800.9, 384.9, 801.9, 381.4);
  ctx.bezierCurveTo(800.9, 385.4, 799.4, 389.9, 798.4, 393.9);
  ctx.bezierCurveTo(799.4, 391.4, 800.4, 388.4, 801.4, 385.9);
  ctx.bezierCurveTo(800.9, 387.9, 800.9, 389.4, 800.4, 391.9);
  ctx.bezierCurveTo(800.4, 388.9, 800.9, 386.4, 801.9, 383.9);
  ctx.bezierCurveTo(801.9, 385.4, 801.4, 386.4, 801.4, 387.9);
  ctx.bezierCurveTo(801.4, 385.9, 801.9, 384.4, 802.4, 382.9);
  ctx.bezierCurveTo(803.9, 387.4, 800.9, 393.4, 798.4, 397.4);
  ctx.bezierCurveTo(798.9, 395.9, 799.4, 393.9, 799.4, 392.9);
  ctx.bezierCurveTo(797.9, 394.4, 795.4, 395.9, 793.9, 397.9);
  ctx.bezierCurveTo(795.4, 392.9, 798.4, 387.4, 798.9, 382.4);
  ctx.bezierCurveTo(798.9, 385.4, 797.9, 388.4, 796.4, 390.4);
  ctx.bezierCurveTo(795.4, 386.4, 796.4, 382.4, 798.9, 378.9);
  ctx.bezierCurveTo(798.4, 381.9, 797.9, 384.9, 796.9, 387.9);
  ctx.bezierCurveTo(796.9, 392.4, 793.4, 401.4, 790.9, 405.4);
  ctx.bezierCurveTo(790.4, 403.9, 791.4, 401.9, 791.9, 400.4);
  ctx.bezierCurveTo(791.9, 400.4, 794.9, 398.9, 795.4, 398.9);
  ctx.bezierCurveTo(794.9, 400.9, 794.4, 402.4, 792.9, 403.9);
  ctx.bezierCurveTo(793.4, 403.9, 793.4, 403.4, 793.9, 402.9);
  ctx.bezierCurveTo(792.4, 404.4, 791.4, 405.9, 789.9, 407.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(664.9, 353.4);
  ctx.bezierCurveTo(686.4, 372.9, 675.9, 411.4, 705.9, 424.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(618.9, 361.9);
  ctx.bezierCurveTo(632.9, 358.4, 651.4, 351.9, 665.9, 356.9);
  ctx.bezierCurveTo(656.4, 345.9, 629.4, 356.4, 618.9, 360.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(609.4, 338.4);
  ctx.bezierCurveTo(621.4, 337.9, 637.9, 343.9, 648.4, 336.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(621.9, 337.9);
  ctx.bezierCurveTo(630.9, 338.9, 642.9, 337.9, 651.4, 333.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(645.9, 333.9);
  ctx.bezierCurveTo(669.4, 331.4, 692.9, 320.9, 716.9, 320.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(693.4, 321.9);
  ctx.bezierCurveTo(704.9, 321.4, 716.9, 316.9, 728.9, 315.4);
  ctx.bezierCurveTo(740.4, 314.4, 751.9, 314.4, 763.4, 314.4);
  ctx.bezierCurveTo(778.4, 314.4, 789.9, 315.9, 803.9, 318.4);
  ctx.bezierCurveTo(817.4, 320.9, 831.4, 316.9, 844.4, 320.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(821.4, 320.9);
  ctx.bezierCurveTo(828.4, 319.9, 839.4, 323.9, 844.9, 319.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(810.4, 350.9);
  ctx.bezierCurveTo(817.4, 341.9, 842.4, 331.9, 847.4, 349.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(846.4, 349.9);
  ctx.bezierCurveTo(848.9, 359.4, 855.9, 364.9, 859.4, 374.9);
  ctx.bezierCurveTo(862.9, 384.4, 866.9, 393.9, 873.4, 401.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(872.9, 402.4);
  ctx.bezierCurveTo(883.9, 407.4, 895.4, 411.9, 907.9, 411.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(907.4, 411.4);
  ctx.bezierCurveTo(918.9, 411.4, 932.9, 411.9, 943.9, 408.4);
  ctx.bezierCurveTo(953.9, 404.9, 973.9, 389.4, 973.4, 377.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(995.9, 324.9);
  ctx.bezierCurveTo(976.9, 338.4, 982.9, 360.4, 973.9, 377.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(844.9, 319.9);
  ctx.bezierCurveTo(853.9, 316.4, 861.4, 310.4, 870.9, 306.9);
  ctx.bezierCurveTo(882.9, 302.9, 893.9, 302.4, 906.4, 301.9);
  ctx.bezierCurveTo(926.4, 300.9, 946.9, 296.9, 966.4, 300.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(948.4, 298.9);
  ctx.bezierCurveTo(958.4, 298.9, 964.9, 300.4, 973.4, 301.9);
  ctx.bezierCurveTo(979.9, 302.9, 987.4, 300.4, 993.9, 302.4);
  ctx.bezierCurveTo(1006.4, 305.9, 1008.4, 320.9, 1005.4, 332.4);
  ctx.bezierCurveTo(1000.4, 330.4, 992.9, 329.4, 988.4, 332.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(858.4, 333.4);
  ctx.bezierCurveTo(858.9, 339.4, 855.9, 346.4, 857.4, 351.9);
  ctx.bezierCurveTo(858.9, 359.9, 864.9, 363.9, 864.9, 372.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(864.4, 373.4);
  ctx.bezierCurveTo(873.4, 405.4, 914.4, 410.4, 942.9, 401.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(940.9, 401.9);
  ctx.bezierCurveTo(957.9, 395.4, 965.4, 382.4, 970.4, 365.4);
  ctx.bezierCurveTo(972.4, 357.4, 970.4, 350.9, 969.9, 342.9);
  ctx.bezierCurveTo(969.9, 336.9, 972.9, 327.4, 968.4, 322.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(857.4, 333.9);
  ctx.bezierCurveTo(856.4, 312.9, 892.9, 311.9, 905.4, 310.4);
  ctx.bezierCurveTo(921.9, 308.4, 943.9, 301.9, 959.4, 309.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(939.9, 307.4);
  ctx.bezierCurveTo(946.4, 305.9, 954.9, 309.4, 960.9, 311.9);
  ctx.bezierCurveTo(966.9, 315.4, 966.9, 317.9, 970.4, 323.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(952.4, 314.9);
  ctx.bezierCurveTo(952.4, 320.4, 954.9, 324.9, 954.9, 330.4);
  ctx.bezierCurveTo(954.9, 335.9, 953.4, 338.9, 954.9, 344.9);
  ctx.bezierCurveTo(956.9, 354.9, 955.9, 363.9, 956.4, 374.4);
  ctx.bezierCurveTo(959.9, 362.9, 960.4, 350.9, 964.4, 339.9);
  ctx.bezierCurveTo(967.9, 328.9, 966.4, 315.4, 952.9, 314.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(873.4, 348.4);
  ctx.bezierCurveTo(880.9, 345.4, 889.4, 339.9, 893.4, 333.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(894.4, 336.9);
  ctx.bezierCurveTo(888.9, 342.4, 883.9, 345.9, 876.4, 347.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(872.9, 349.9);
  ctx.bezierCurveTo(878.4, 351.9, 883.9, 353.9, 889.4, 350.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(892.4, 349.9);
  ctx.bezierCurveTo(892.4, 356.9, 867.9, 358.4, 870.9, 349.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(899.9, 336.4);
  ctx.bezierCurveTo(895.4, 347.9, 901.9, 357.4, 914.4, 355.9);
  ctx.bezierCurveTo(924.9, 354.9, 929.9, 339.9, 923.9, 330.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(897.9, 335.9);
  ctx.bezierCurveTo(897.9, 334.9, 899.4, 334.9, 897.9, 333.9);
  ctx.bezierCurveTo(895.9, 333.9, 894.9, 334.9, 893.9, 336.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(892.4, 333.4);
  ctx.bezierCurveTo(902.4, 333.4, 910.9, 328.9, 920.9, 330.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(925.4, 331.4);
  ctx.bezierCurveTo(925.4, 331.9, 925.9, 331.9, 925.9, 331.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(929.9, 333.9);
  ctx.bezierCurveTo(929.4, 337.4, 930.9, 339.4, 933.9, 340.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(928.9, 333.9);
  ctx.bezierCurveTo(930.4, 334.9, 932.9, 335.9, 934.4, 336.9);
  ctx.bezierCurveTo(934.9, 329.9, 926.4, 326.9, 920.4, 325.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(933.4, 340.9);
  ctx.bezierCurveTo(934.4, 339.9, 935.9, 339.4, 937.4, 338.9);
  ctx.bezierCurveTo(942.9, 348.9, 926.9, 349.9, 921.9, 354.4);
  ctx.bezierCurveTo(929.4, 351.4, 927.4, 341.4, 928.4, 335.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(882.9, 324.9);
  ctx.bezierCurveTo(882.9, 332.9, 881.4, 337.4, 875.4, 342.9);
  ctx.bezierCurveTo(881.4, 341.4, 892.4, 336.4, 892.9, 328.4);
  ctx.bezierCurveTo(893.4, 319.9, 880.4, 320.4, 883.4, 326.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(887.4, 363.4);
  ctx.bezierCurveTo(895.4, 367.4, 913.4, 376.4, 921.4, 368.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(898.4, 362.4);
  ctx.bezierCurveTo(906.9, 362.9, 915.9, 363.4, 923.9, 361.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(878.4, 373.4);
  ctx.bezierCurveTo(895.4, 379.4, 898.4, 398.4, 918.9, 394.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(872.9, 403.4);
  ctx.bezierCurveTo(872.9, 406.4, 873.9, 408.9, 875.9, 410.9);
  ctx.bezierCurveTo(875.9, 409.4, 875.4, 408.9, 875.4, 407.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(884.9, 438.4);
  ctx.bezierCurveTo(888.4, 443.9, 894.9, 449.4, 890.9, 455.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(882.4, 459.4);
  ctx.bezierCurveTo(880.9, 461.9, 880.4, 464.4, 877.9, 465.9);
  ctx.bezierCurveTo(879.9, 464.4, 881.9, 462.9, 883.4, 460.4);
  ctx.bezierCurveTo(881.4, 462.4, 879.4, 463.4, 877.4, 464.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(893.9, 448.9);
  ctx.bezierCurveTo(893.9, 449.9, 893.9, 450.4, 893.9, 451.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(893.4, 454.4);
  ctx.bezierCurveTo(892.9, 454.9, 892.9, 455.4, 892.4, 455.9);
  ctx.bezierCurveTo(891.9, 451.4, 891.9, 447.4, 889.9, 442.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(891.4, 446.9);
  ctx.bezierCurveTo(893.9, 452.4, 895.9, 455.9, 898.9, 460.9);
  ctx.bezierCurveTo(897.9, 456.9, 896.4, 452.9, 893.4, 449.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(894.9, 452.9);
  ctx.bezierCurveTo(895.4, 454.4, 895.9, 455.9, 896.4, 456.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(870.9, 471.4);
  ctx.bezierCurveTo(858.9, 476.9, 852.4, 483.4, 840.4, 475.4);
  ctx.bezierCurveTo(832.4, 469.9, 822.4, 458.4, 811.4, 463.4);
  ctx.bezierCurveTo(805.9, 465.4, 804.4, 474.9, 796.9, 468.9);
  ctx.bezierCurveTo(794.4, 466.4, 789.4, 455.4, 789.4, 451.9);
  ctx.bezierCurveTo(789.4, 440.4, 801.9, 431.9, 801.4, 419.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(793.4, 408.4);
  ctx.bezierCurveTo(793.4, 410.9, 793.4, 413.4, 792.9, 415.9);
  ctx.bezierCurveTo(794.9, 410.9, 796.9, 406.4, 797.9, 400.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(793.9, 408.4);
  ctx.bezierCurveTo(793.4, 407.9, 793.4, 407.9, 793.4, 407.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(793.4, 406.4);
  ctx.bezierCurveTo(793.4, 406.9, 793.4, 406.9, 794.4, 405.9);
  ctx.bezierCurveTo(794.4, 406.9, 794.4, 407.4, 794.4, 408.4);
  ctx.bezierCurveTo(794.4, 407.9, 794.9, 406.9, 794.4, 405.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(794.4, 400.4);
  ctx.bezierCurveTo(794.9, 401.4, 795.9, 406.4, 795.4, 402.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(795.4, 400.4);
  ctx.bezierCurveTo(795.9, 402.4, 795.9, 403.9, 795.9, 405.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(708.4, 363.9);
  ctx.bezierCurveTo(715.9, 366.9, 721.4, 371.4, 729.4, 372.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(726.9, 367.9);
  ctx.bezierCurveTo(720.4, 367.9, 715.4, 363.9, 709.4, 362.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(708.4, 361.9);
  ctx.bezierCurveTo(712.9, 356.9, 716.9, 351.4, 723.9, 354.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(725.9, 354.9);
  ctx.bezierCurveTo(726.9, 348.9, 718.4, 350.9, 714.4, 350.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(731.4, 352.4);
  ctx.bezierCurveTo(730.4, 372.4, 759.4, 372.4, 763.4, 354.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(765.9, 351.9);
  ctx.bezierCurveTo(766.4, 352.4, 766.4, 352.9, 766.4, 353.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(765.9, 355.9);
  ctx.bezierCurveTo(768.9, 348.9, 764.9, 340.9, 767.9, 334.4);
  ctx.bezierCurveTo(753.9, 330.4, 730.9, 332.9, 721.4, 344.4);
  ctx.bezierCurveTo(724.4, 346.4, 728.4, 347.4, 730.4, 350.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(715.9, 347.4);
  ctx.bezierCurveTo(712.9, 343.9, 707.9, 341.9, 702.9, 341.4);
  ctx.bezierCurveTo(705.4, 343.9, 708.4, 346.4, 710.9, 348.4);
  ctx.bezierCurveTo(707.4, 353.9, 701.9, 358.9, 698.9, 364.9);
  ctx.bezierCurveTo(704.9, 359.9, 713.4, 355.9, 714.9, 347.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(760.9, 357.9);
  ctx.bezierCurveTo(764.9, 357.9, 768.9, 358.9, 772.4, 359.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(768.9, 350.9);
  ctx.bezierCurveTo(771.9, 353.4, 775.4, 354.4, 778.9, 355.4);
  ctx.bezierCurveTo(777.9, 357.9, 775.4, 359.9, 773.4, 361.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(778.9, 355.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(786.4, 355.4);
  ctx.bezierCurveTo(792.9, 346.9, 784.9, 332.4, 775.9, 329.9);
  ctx.bezierCurveTo(766.9, 327.9, 753.4, 329.4, 744.4, 329.4);
  ctx.bezierCurveTo(758.4, 329.4, 775.4, 324.9, 786.9, 334.4);
  ctx.bezierCurveTo(792.4, 339.4, 796.4, 344.4, 796.4, 351.9);
  ctx.bezierCurveTo(796.4, 359.4, 787.4, 366.4, 786.9, 355.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(764.9, 368.9);
  ctx.bezierCurveTo(757.9, 374.4, 749.9, 373.9, 741.4, 374.9);
  ctx.bezierCurveTo(748.9, 373.4, 755.9, 369.4, 762.9, 368.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(783.4, 467.4);
  ctx.bezierCurveTo(777.4, 474.4, 776.4, 482.4, 773.9, 490.4);
  ctx.bezierCurveTo(769.4, 482.9, 773.9, 470.4, 781.9, 466.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(785.4, 548.4);
  ctx.bezierCurveTo(815.9, 530.9, 852.4, 532.9, 885.9, 529.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(880.4, 530.4);
  ctx.bezierCurveTo(882.9, 530.4, 885.4, 530.9, 887.4, 531.9);
  ctx.bezierCurveTo(856.9, 552.4, 817.9, 546.9, 782.9, 548.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(781.9, 548.4);
  ctx.bezierCurveTo(788.4, 546.9, 788.9, 543.4, 792.9, 538.9);
  ctx.bezierCurveTo(796.9, 533.9, 800.9, 531.9, 806.9, 528.4);
  ctx.bezierCurveTo(815.4, 523.9, 824.9, 517.9, 834.9, 517.9);
  ctx.bezierCurveTo(839.9, 517.9, 842.4, 519.9, 847.4, 520.9);
  ctx.bezierCurveTo(855.4, 522.9, 861.4, 518.9, 868.9, 517.4);
  ctx.bezierCurveTo(875.9, 515.9, 876.9, 517.9, 883.9, 520.4);
  ctx.bezierCurveTo(891.4, 522.9, 900.4, 521.9, 907.4, 524.9);
  ctx.bezierCurveTo(902.4, 530.9, 892.9, 529.9, 886.4, 531.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(890.4, 530.9);
  ctx.bezierCurveTo(896.9, 530.4, 901.4, 528.4, 906.9, 531.4);
  ctx.bezierCurveTo(910.9, 533.4, 913.9, 537.4, 917.4, 539.4);
  ctx.bezierCurveTo(905.4, 534.4, 899.9, 532.4, 886.4, 533.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(842.4, 490.4);
  ctx.bezierCurveTo(845.9, 494.9, 849.9, 497.9, 852.9, 502.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(858.4, 492.9);
  ctx.bezierCurveTo(855.9, 494.9, 854.4, 497.9, 853.9, 500.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(837.4, 572.9);
  ctx.bezierCurveTo(849.4, 577.9, 867.4, 576.4, 877.9, 567.9);
  ctx.bezierCurveTo(864.4, 571.4, 849.4, 578.9, 835.4, 574.4);
  ctx.bezierCurveTo(833.9, 572.9, 835.9, 573.9, 835.9, 572.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(837.4, 573.4);
  ctx.bezierCurveTo(838.4, 580.9, 869.4, 577.4, 874.9, 572.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(874.4, 569.9);
  ctx.bezierCurveTo(866.4, 574.4, 856.4, 574.9, 847.4, 575.9);
  ctx.bezierCurveTo(857.9, 575.9, 868.9, 575.4, 879.4, 572.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(791.4, 556.9);
  ctx.bezierCurveTo(792.4, 556.9, 793.9, 557.4, 794.9, 557.9);
  ctx.bezierCurveTo(795.4, 557.9, 795.4, 557.9, 794.9, 557.9);
  ctx.bezierCurveTo(795.4, 560.9, 800.4, 565.4, 804.9, 565.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(820.9, 572.9);
  ctx.bezierCurveTo(819.4, 572.4, 817.4, 571.9, 815.9, 571.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(619.9, 361.9);
  ctx.bezierCurveTo(618.4, 366.4, 618.9, 370.9, 618.9, 375.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(617.9, 373.9);
  ctx.bezierCurveTo(622.4, 380.9, 612.9, 386.9, 612.9, 392.4);
  ctx.bezierCurveTo(613.4, 400.9, 623.9, 406.4, 627.9, 411.9);
  ctx.bezierCurveTo(616.4, 411.4, 630.9, 424.4, 624.4, 428.4);
  ctx.bezierCurveTo(624.4, 426.4, 622.9, 424.4, 622.9, 422.9);
  ctx.bezierCurveTo(621.4, 428.9, 626.9, 435.9, 625.9, 440.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(625.4, 440.9);
  ctx.bezierCurveTo(612.4, 433.9, 620.9, 422.9, 614.4, 412.4);
  ctx.bezierCurveTo(611.4, 407.9, 605.9, 403.9, 602.4, 399.9);
  ctx.bezierCurveTo(598.4, 394.9, 594.4, 390.9, 587.4, 389.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(587.4, 388.4);
  ctx.bezierCurveTo(575.4, 382.9, 566.9, 373.9, 554.4, 369.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(554.9, 368.9);
  ctx.bezierCurveTo(563.4, 365.9, 552.4, 361.4, 548.4, 360.9);
  ctx.bezierCurveTo(542.9, 360.4, 538.4, 361.9, 534.9, 365.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(551.9, 373.4);
  ctx.bezierCurveTo(536.9, 365.4, 538.9, 394.4, 541.9, 400.9);
  ctx.bezierCurveTo(543.9, 405.9, 546.9, 412.9, 549.9, 417.4);
  ctx.bezierCurveTo(553.4, 422.4, 559.4, 424.9, 562.4, 429.9);
  ctx.bezierCurveTo(554.4, 418.4, 565.4, 376.4, 549.4, 373.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(535.4, 366.9);
  ctx.bezierCurveTo(531.4, 371.4, 535.4, 400.4, 537.4, 407.4);
  ctx.bezierCurveTo(541.4, 422.4, 553.9, 433.4, 561.4, 446.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(576.4, 474.4);
  ctx.bezierCurveTo(580.4, 483.9, 594.4, 488.9, 602.4, 493.9);
  ctx.bezierCurveTo(612.4, 499.9, 619.9, 502.4, 630.9, 500.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(636.4, 497.4);
  ctx.bezierCurveTo(636.9, 486.9, 633.9, 477.9, 628.4, 469.4);
  ctx.bezierCurveTo(629.9, 470.4, 630.4, 471.9, 631.4, 473.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(621.9, 460.9);
  ctx.bezierCurveTo(620.4, 457.9, 618.4, 454.9, 614.9, 454.4);
  ctx.bezierCurveTo(613.4, 457.4, 615.4, 459.4, 618.9, 460.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(608.9, 446.9);
  ctx.bezierCurveTo(604.4, 437.4, 605.4, 432.9, 605.4, 423.9);
  ctx.bezierCurveTo(605.4, 414.9, 598.4, 413.9, 592.4, 407.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(607.9, 447.9);
  ctx.bezierCurveTo(594.4, 456.4, 591.4, 446.4, 581.4, 439.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(587.4, 393.4);
  ctx.bezierCurveTo(581.9, 392.4, 581.9, 399.4, 573.9, 397.4);
  ctx.bezierCurveTo(568.9, 396.4, 563.9, 392.4, 561.9, 387.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(585.9, 393.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(633.9, 501.4);
  ctx.bezierCurveTo(637.9, 519.9, 649.9, 537.4, 642.9, 556.9);
  ctx.bezierCurveTo(637.4, 547.9, 630.9, 524.9, 621.9, 519.9);
  ctx.bezierCurveTo(617.4, 517.4, 608.4, 518.4, 602.9, 516.4);
  ctx.bezierCurveTo(597.9, 514.9, 592.4, 513.9, 587.9, 510.9);
  ctx.bezierCurveTo(588.9, 510.9, 589.9, 509.9, 590.9, 509.9);
  ctx.bezierCurveTo(587.4, 506.4, 580.9, 505.4, 577.4, 500.9);
  ctx.bezierCurveTo(581.9, 499.4, 586.4, 499.9, 590.9, 498.4);
  ctx.bezierCurveTo(587.9, 487.9, 575.9, 484.9, 574.4, 474.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(532.9, 389.9);
  ctx.bezierCurveTo(522.4, 395.4, 521.4, 406.9, 528.9, 415.4);
  ctx.bezierCurveTo(531.9, 419.4, 536.4, 423.9, 539.9, 426.9);
  ctx.bezierCurveTo(543.9, 430.4, 549.4, 431.4, 552.9, 435.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(555.9, 441.9);
  ctx.bezierCurveTo(547.9, 440.9, 528.9, 428.9, 522.4, 420.4);
  ctx.bezierCurveTo(514.9, 411.4, 513.4, 385.4, 501.4, 403.4);
  ctx.bezierCurveTo(500.9, 395.4, 506.4, 389.9, 510.9, 384.9);
  ctx.bezierCurveTo(499.9, 378.9, 485.9, 381.4, 474.4, 379.4);
  ctx.bezierCurveTo(479.9, 374.4, 486.4, 372.4, 493.4, 372.4);
  ctx.bezierCurveTo(496.9, 371.9, 499.4, 374.9, 501.4, 371.4);
  ctx.bezierCurveTo(506.4, 364.4, 491.4, 359.4, 489.4, 354.9);
  ctx.bezierCurveTo(495.9, 353.4, 499.9, 350.4, 496.9, 343.4);
  ctx.bezierCurveTo(497.4, 342.9, 498.4, 341.9, 499.4, 341.9);
  ctx.bezierCurveTo(495.9, 336.9, 488.9, 336.9, 484.4, 333.4);
  ctx.bezierCurveTo(480.4, 330.9, 473.9, 324.9, 472.4, 320.9);
  ctx.bezierCurveTo(487.9, 326.4, 501.4, 341.4, 519.9, 334.4);
  ctx.bezierCurveTo(518.9, 332.4, 516.4, 330.9, 515.4, 328.9);
  ctx.bezierCurveTo(514.4, 326.4, 517.9, 325.4, 515.4, 323.4);
  ctx.bezierCurveTo(512.4, 320.4, 507.4, 321.9, 503.4, 318.9);
  ctx.bezierCurveTo(492.4, 310.4, 500.4, 301.9, 498.4, 291.9);
  ctx.bezierCurveTo(495.4, 280.9, 492.4, 265.9, 499.4, 255.9);
  ctx.bezierCurveTo(503.9, 249.4, 512.4, 243.9, 517.9, 238.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(1010.9, 324.9);
  ctx.bezierCurveTo(1017.4, 319.4, 1024.9, 309.9, 1020.4, 299.4);
  ctx.bezierCurveTo(1017.9, 294.4, 1018.4, 294.4, 1012.9, 294.9);
  ctx.bezierCurveTo(1009.9, 294.9, 1004.4, 295.9, 1001.9, 296.4);
  ctx.bezierCurveTo(995.4, 296.9, 965.4, 304.9, 961.9, 293.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(960.9, 292.4);
  ctx.bezierCurveTo(960.9, 274.4, 957.9, 256.9, 957.4, 239.4);
  ctx.bezierCurveTo(956.9, 227.4, 956.9, 205.4, 944.9, 199.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(963.4, 202.9);
  ctx.bezierCurveTo(963.9, 202.4, 963.9, 202.4, 963.9, 202.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(964.4, 199.9);
  ctx.bezierCurveTo(968.4, 206.4, 974.4, 211.4, 978.4, 217.4);
  ctx.bezierCurveTo(981.4, 222.4, 980.9, 226.4, 982.9, 231.4);
  ctx.bezierCurveTo(992.4, 220.9, 972.9, 208.9, 968.9, 200.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(975.9, 200.9);
  ctx.bezierCurveTo(983.4, 214.4, 993.4, 226.4, 1002.4, 238.9);
  ctx.bezierCurveTo(1006.4, 243.9, 1011.9, 252.9, 1010.9, 259.9);
  ctx.bezierCurveTo(1009.9, 265.4, 1000.4, 266.9, 1004.9, 272.4);
  ctx.bezierCurveTo(1001.4, 274.9, 992.9, 274.4, 996.4, 280.9);
  ctx.bezierCurveTo(1009.9, 264.4, 1021.4, 288.4, 1015.4, 291.9);
  ctx.bezierCurveTo(1013.9, 287.4, 1008.9, 281.4, 1003.4, 282.4);
  ctx.bezierCurveTo(994.9, 283.9, 999.4, 289.4, 1001.9, 294.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(614.9, 336.4);
  ctx.bezierCurveTo(609.9, 332.4, 606.9, 312.4, 603.9, 305.4);
  ctx.bezierCurveTo(598.9, 290.4, 600.9, 286.4, 603.9, 272.4);
  ctx.bezierCurveTo(606.9, 260.4, 603.9, 249.4, 606.9, 237.4);
  ctx.bezierCurveTo(609.9, 225.4, 617.9, 215.4, 620.9, 203.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(619.9, 203.4);
  ctx.bezierCurveTo(622.9, 200.4, 623.9, 196.4, 622.9, 193.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(621.9, 192.4);
  ctx.bezierCurveTo(623.9, 186.4, 627.9, 181.4, 630.9, 176.4);
  ctx.bezierCurveTo(628.9, 175.4, 626.9, 174.4, 625.9, 173.4);
  ctx.bezierCurveTo(626.9, 170.4, 626.9, 165.4, 627.9, 163.4);
  ctx.bezierCurveTo(625.9, 162.4, 624.9, 161.4, 622.9, 160.4);
  ctx.bezierCurveTo(627.9, 155.4, 631.9, 148.4, 631.9, 140.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(631.9, 142.4);
  ctx.bezierCurveTo(629.9, 139.4, 630.9, 136.4, 632.9, 133.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(634.9, 137.4);
  ctx.bezierCurveTo(634.9, 134.4, 634.9, 132.4, 634.9, 130.4);
  ctx.bezierCurveTo(640.9, 141.4, 650.9, 146.4, 659.9, 155.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(663.9, 158.4);
  ctx.bezierCurveTo(674.9, 167.4, 675.9, 183.4, 690.9, 188.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(672.9, 165.4);
  ctx.bezierCurveTo(691.9, 181.4, 721.9, 182.4, 745.9, 182.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(748.9, 183.4);
  ctx.bezierCurveTo(735.9, 185.4, 724.9, 194.4, 712.9, 197.4);
  ctx.bezierCurveTo(697.9, 202.4, 680.9, 203.4, 665.9, 204.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(673.9, 205.4);
  ctx.bezierCurveTo(696.9, 206.4, 712.9, 202.4, 733.9, 195.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(700.9, 206.4);
  ctx.bezierCurveTo(712.9, 206.4, 725.9, 205.4, 736.9, 199.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(732.9, 195.4);
  ctx.bezierCurveTo(734.9, 196.4, 735.9, 197.4, 736.9, 198.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(739.9, 201.4);
  ctx.bezierCurveTo(748.9, 202.4, 758.9, 200.4, 766.9, 197.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(738.9, 199.4);
  ctx.bezierCurveTo(768.9, 200.4, 790.9, 186.4, 812.9, 168.4);
  ctx.bezierCurveTo(822.9, 160.4, 825.9, 151.4, 833.9, 141.4);
  ctx.bezierCurveTo(840.9, 133.4, 849.9, 129.4, 856.9, 121.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(857.9, 123.4);
  ctx.bezierCurveTo(863.9, 125.4, 869.9, 126.4, 875.9, 127.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(880.9, 128.4);
  ctx.bezierCurveTo(886.9, 132.4, 893.9, 136.4, 899.9, 138.4);
  ctx.bezierCurveTo(888.9, 137.4, 875.9, 136.4, 867.9, 127.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(894.9, 136.4);
  ctx.bezierCurveTo(901.9, 143.4, 908.9, 149.4, 915.9, 156.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(916.9, 157.4);
  ctx.bezierCurveTo(915.9, 156.4, 915.9, 155.4, 914.9, 153.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(913.9, 152.4);
  ctx.bezierCurveTo(921.9, 160.4, 928.9, 167.4, 932.9, 177.4);
  ctx.bezierCurveTo(936.9, 187.4, 935.9, 196.4, 944.9, 202.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(689.9, 581.4);
  ctx.bezierCurveTo(708.9, 588.4, 723.9, 614.4, 741.9, 625.4);
  ctx.bezierCurveTo(759.9, 634.4, 777.9, 645.4, 795.9, 653.4);
  ctx.bezierCurveTo(836.9, 671.4, 876.9, 664.4, 911.9, 639.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(930.9, 616.4);
  ctx.bezierCurveTo(934.9, 612.4, 936.9, 608.4, 938.9, 603.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(929.9, 613.4);
  ctx.bezierCurveTo(928.9, 643.4, 925.9, 677.4, 913.9, 704.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(938.9, 606.4);
  ctx.bezierCurveTo(939.9, 637.4, 941.9, 674.4, 949.9, 703.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(963.9, 616.4);
  ctx.bezierCurveTo(959.9, 646.4, 977.9, 672.4, 976.9, 701.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(962.9, 617.4);
  ctx.bezierCurveTo(961.9, 644.4, 973.9, 674.4, 981.9, 698.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(954.9, 702.4);
  ctx.bezierCurveTo(951.9, 683.4, 948.9, 664.4, 945.9, 645.4);
  ctx.bezierCurveTo(943.9, 632.4, 945.9, 616.4, 939.9, 605.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(969.9, 389.4);
  ctx.bezierCurveTo(969.9, 400.4, 970.9, 410.4, 970.9, 420.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(971.9, 445.4);
  ctx.bezierCurveTo(971.9, 468.4, 976.9, 492.4, 969.9, 513.4);
  ctx.bezierCurveTo(961.9, 535.4, 948.9, 558.4, 950.9, 582.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(647.9, 619.4);
  ctx.bezierCurveTo(648.9, 648.4, 645.9, 677.4, 641.9, 705.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(649.9, 619.4);
  ctx.bezierCurveTo(652.9, 649.4, 661.9, 683.4, 685.9, 703.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(631.9, 638.4);
  ctx.bezierCurveTo(624.9, 649.4, 628.9, 672.4, 611.9, 672.4);
  ctx.bezierCurveTo(616.9, 680.4, 618.9, 689.4, 616.9, 699.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(627.9, 640.4);
  ctx.bezierCurveTo(628.9, 633.4, 631.9, 626.4, 635.9, 621.4);
  ctx.bezierCurveTo(642.9, 648.4, 627.9, 675.4, 625.9, 702.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(974.9, 442.4);
  ctx.bezierCurveTo(987.9, 425.4, 979.9, 400.4, 993.9, 386.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(988.9, 373.4);
  ctx.bezierCurveTo(986.9, 364.4, 989.9, 356.4, 993.9, 349.4);
  ctx.bezierCurveTo(989.9, 350.4, 984.9, 353.4, 981.9, 357.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(979.9, 363.4);
  ctx.bezierCurveTo(983.9, 367.4, 985.9, 371.4, 988.9, 375.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(967.9, 200.4);
  ctx.bezierCurveTo(948.9, 189.4, 941.9, 168.4, 920.9, 159.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(977.9, 203.4);
  ctx.bezierCurveTo(973.9, 202.4, 970.9, 201.4, 967.9, 199.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(874.9, 125.4);
  ctx.bezierCurveTo(883.9, 107.4, 911.9, 137.4, 921.9, 145.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(922.9, 145.4);
  ctx.bezierCurveTo(923.9, 146.4, 923.9, 147.4, 922.9, 147.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(924.9, 145.4);
  ctx.bezierCurveTo(929.9, 134.4, 934.9, 122.4, 921.9, 115.4);
  ctx.bezierCurveTo(923.9, 116.4, 911.9, 117.4, 908.9, 116.4);
  ctx.bezierCurveTo(906.9, 115.4, 903.9, 106.4, 902.9, 105.4);
  ctx.bezierCurveTo(902.9, 108.4, 899.9, 112.4, 898.9, 115.4);
  ctx.bezierCurveTo(885.9, 112.4, 872.9, 99.4, 859.9, 95.4);
  ctx.bezierCurveTo(859.9, 102.4, 863.9, 108.4, 869.9, 111.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(723.9, 342.4);
  ctx.bezierCurveTo(720.9, 344.4, 717.9, 345.4, 715.9, 347.4);
  ctx.bezierCurveTo(719.9, 347.4, 722.9, 345.4, 725.9, 344.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(516.9, 240.4);
  ctx.bezierCurveTo(527.9, 238.4, 542.9, 235.4, 546.9, 224.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(519.9, 233.4);
  ctx.bezierCurveTo(515.9, 234.4, 519.9, 234.4, 520.9, 234.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(516.9, 238.4);
  ctx.bezierCurveTo(529.9, 232.4, 547.9, 227.4, 555.9, 214.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(542.9, 223.4);
  ctx.bezierCurveTo(556.9, 212.4, 567.9, 207.4, 578.9, 192.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(569.9, 200.4);
  ctx.bezierCurveTo(576.9, 192.4, 584.9, 183.4, 588.9, 172.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(583.9, 179.4);
  ctx.bezierCurveTo(582.9, 171.4, 581.9, 164.4, 581.9, 156.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(515.9, 230.4);
  ctx.bezierCurveTo(515.9, 226.4, 517.9, 222.4, 520.9, 220.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(516.9, 221.4);
  ctx.bezierCurveTo(515.9, 216.4, 516.9, 212.4, 513.9, 208.4);
  ctx.bezierCurveTo(516.9, 206.4, 518.9, 202.4, 521.9, 200.4);
  ctx.bezierCurveTo(505.9, 191.4, 521.9, 175.4, 530.9, 169.4);
  ctx.bezierCurveTo(528.9, 168.4, 527.9, 166.4, 525.9, 165.4);
  ctx.bezierCurveTo(527.9, 162.4, 531.9, 161.4, 534.9, 161.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(541.9, 157.4);
  ctx.bezierCurveTo(541.9, 150.4, 538.9, 146.4, 532.9, 144.4);
  ctx.bezierCurveTo(554.9, 137.4, 531.9, 105.4, 548.9, 106.4);
  ctx.bezierCurveTo(551.9, 84.4, 564.9, 72.4, 583.9, 87.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(589.9, 94.4);
  ctx.bezierCurveTo(605.9, 96.4, 611.9, 72.4, 590.9, 74.4);
  ctx.bezierCurveTo(593.9, 71.4, 597.9, 65.4, 599.9, 62.4);
  ctx.bezierCurveTo(597.9, 61.4, 595.9, 59.4, 593.9, 59.4);
  ctx.bezierCurveTo(601.9, 55.4, 609.9, 57.4, 618.9, 56.4);
  ctx.bezierCurveTo(610.9, 46.4, 611.9, 35.4, 622.9, 26.4);
  ctx.bezierCurveTo(623.9, 28.4, 627.9, 31.4, 628.9, 33.4);
  ctx.bezierCurveTo(634.9, 25.4, 638.9, 14.4, 649.9, 12.4);
  ctx.bezierCurveTo(646.9, 22.4, 651.9, 30.4, 662.9, 32.4);
  ctx.bezierCurveTo(669.9, 17.4, 674.9, 4.4, 686.9, 25.4);
  ctx.bezierCurveTo(687.9, 17.4, 682.9, 9.4, 678.9, 2.4);
  ctx.bezierCurveTo(688.9, 7.4, 699.9, 11.4, 707.9, 19.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(711.9, 23.4);
  ctx.bezierCurveTo(731.9, 16.4, 763.9, 2.4, 785.9, 3.4);
  ctx.bezierCurveTo(795.9, 3.4, 802.9, 10.4, 812.9, 11.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(815.9, 14.4);
  ctx.bezierCurveTo(832.9, 19.4, 844.9, 32.4, 852.9, 47.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(856.9, 49.4);
  ctx.bezierCurveTo(859.9, 29.4, 841.9, 28.4, 831.9, 17.4);
  ctx.bezierCurveTo(846.9, 11.4, 870.9, 44.4, 871.9, 59.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(869.9, 55.4);
  ctx.bezierCurveTo(867.9, 45.4, 862.9, 35.4, 859.9, 25.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(865.9, 56.4);
  ctx.bezierCurveTo(885.9, 56.4, 918.9, 48.4, 931.9, 68.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(933.9, 74.4);
  ctx.bezierCurveTo(920.9, 70.4, 910.9, 48.4, 899.9, 39.4);
  ctx.bezierCurveTo(890.9, 32.4, 879.9, 28.4, 869.9, 23.4);
  ctx.bezierCurveTo(899.9, 29.4, 914.9, 43.4, 928.9, 70.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(929.9, 72.4);
  ctx.bezierCurveTo(938.9, 51.4, 906.9, 29.4, 891.9, 20.4);
  ctx.bezierCurveTo(926.9, 39.4, 957.9, 48.4, 947.9, 91.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(942.9, 82.4);
  ctx.bezierCurveTo(949.9, 93.4, 957.9, 93.4, 966.9, 99.4);
  ctx.bezierCurveTo(965.9, 100.4, 965.9, 103.4, 963.9, 104.4);
  ctx.bezierCurveTo(968.9, 108.4, 975.9, 110.4, 980.9, 114.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(983.9, 117.4);
  ctx.bezierCurveTo(981.9, 121.4, 979.9, 125.4, 979.9, 129.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(980.9, 131.4);
  ctx.bezierCurveTo(973.9, 139.4, 963.9, 143.4, 959.9, 153.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(949.9, 152.4);
  ctx.bezierCurveTo(949.9, 155.4, 950.9, 161.4, 953.9, 165.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(953.9, 153.4);
  ctx.bezierCurveTo(951.9, 160.4, 955.9, 167.4, 962.9, 171.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(958.9, 168.4);
  ctx.bezierCurveTo(959.9, 169.4, 961.9, 170.4, 962.9, 170.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(863.9, 106.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(855.9, 97.4);
  ctx.bezierCurveTo(844.9, 96.4, 836.9, 86.4, 829.9, 79.4);
  ctx.bezierCurveTo(839.9, 78.4, 845.9, 92.4, 853.9, 98.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(861.9, 107.4);
  ctx.bezierCurveTo(862.9, 109.4, 864.9, 111.4, 864.9, 113.4);
  ctx.bezierCurveTo(853.9, 115.4, 842.9, 105.4, 831.9, 101.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(832.9, 102.4);
  ctx.bezierCurveTo(800.9, 117.4, 768.9, 87.4, 741.9, 87.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(738.9, 85.4);
  ctx.bezierCurveTo(739.9, 91.4, 740.9, 94.4, 747.9, 95.4);
  ctx.bezierCurveTo(742.9, 97.4, 736.9, 97.4, 731.9, 94.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(729.9, 94.4);
  ctx.bezierCurveTo(727.9, 102.4, 721.9, 102.4, 716.9, 108.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(712.9, 112.4);
  ctx.bezierCurveTo(703.9, 115.4, 696.9, 107.4, 690.9, 101.4);
  ctx.bezierCurveTo(689.9, 103.4, 690.9, 104.4, 689.9, 106.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(689.9, 109.4);
  ctx.bezierCurveTo(686.9, 111.4, 682.9, 112.4, 678.9, 113.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(682.9, 109.4);
  ctx.bezierCurveTo(681.9, 109.4, 681.9, 109.4, 681.9, 109.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(679.9, 101.4);
  ctx.bezierCurveTo(689.9, 95.4, 700.9, 93.4, 710.9, 88.4);
  ctx.bezierCurveTo(696.9, 84.4, 681.9, 90.4, 668.9, 96.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(685.9, 111.4);
  ctx.bezierCurveTo(684.9, 112.4, 683.9, 112.4, 682.9, 112.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(678.9, 100.4);
  ctx.bezierCurveTo(675.9, 104.4, 676.9, 107.4, 679.9, 110.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(580.9, 168.4);
  ctx.bezierCurveTo(581.9, 164.4, 581.9, 160.4, 582.9, 157.4);
  ctx.bezierCurveTo(582.9, 161.4, 584.9, 166.4, 585.9, 169.4);
  ctx.bezierCurveTo(586.9, 160.4, 586.9, 151.4, 588.9, 142.4);
  ctx.bezierCurveTo(598.9, 152.4, 602.9, 173.4, 605.9, 186.4);
  ctx.bezierCurveTo(605.9, 174.4, 608.9, 163.4, 609.9, 152.4);
  ctx.bezierCurveTo(609.9, 140.4, 604.9, 137.4, 598.9, 126.4);
  ctx.bezierCurveTo(602.9, 128.4, 607.9, 127.4, 611.9, 129.4);
  ctx.bezierCurveTo(612.9, 127.4, 613.9, 125.4, 613.9, 123.4);
  ctx.bezierCurveTo(622.9, 122.4, 627.9, 114.4, 634.9, 111.4);
  ctx.bezierCurveTo(635.9, 112.4, 635.9, 114.4, 636.9, 115.4);
  ctx.bezierCurveTo(636.9, 112.4, 638.9, 109.4, 638.9, 107.4);
  ctx.bezierCurveTo(641.9, 109.4, 646.9, 110.4, 649.9, 113.4);
  ctx.bezierCurveTo(650.9, 111.4, 649.9, 110.4, 650.9, 109.4);
  ctx.bezierCurveTo(662.9, 120.4, 670.9, 138.4, 682.9, 150.4);
  ctx.bezierCurveTo(676.9, 136.4, 665.9, 121.4, 663.9, 107.4);
  ctx.bezierCurveTo(663.9, 106.4, 665.9, 106.4, 666.9, 106.4);
  ctx.bezierCurveTo(663.9, 99.4, 666.9, 99.4, 669.9, 95.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(1230.9, 240.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(485.9, 699.4);
  ctx.bezierCurveTo(528.9, 694.4, 564.9, 648.4, 597.9, 625.4);
  ctx.bezierCurveTo(611.9, 616.4, 632.9, 611.4, 638.9, 593.4);
  ctx.bezierCurveTo(640.9, 585.4, 644.9, 565.4, 644.9, 557.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(951.9, 584.4);
  ctx.bezierCurveTo(971.9, 583.4, 977.9, 607.4, 988.9, 620.4);
  ctx.bezierCurveTo(999.9, 634.4, 1012.9, 639.4, 1029.9, 645.4);
  ctx.bezierCurveTo(1048.9, 652.4, 1069.9, 660.4, 1087.9, 670.4);
  ctx.bezierCurveTo(1107.9, 681.4, 1113.9, 699.4, 1127.9, 714.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(953.9, 153.4);
  ctx.bezierCurveTo(952.9, 162.4, 957.9, 169.4, 964.9, 172.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(772.9, 385.4);
  ctx.bezierCurveTo(767.9, 391.4, 764.9, 399.4, 757.9, 403.4);
  ctx.bezierCurveTo(762.9, 399.4, 767.9, 393.4, 769.9, 387.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(787.9, 380.4);
  ctx.bezierCurveTo(782.9, 380.4, 778.9, 380.4, 774.9, 380.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(769.9, 369.4);
  ctx.bezierCurveTo(772.9, 372.4, 774.9, 374.4, 776.9, 377.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(738.9, 311.4);
  ctx.bezierCurveTo(747.9, 311.4, 755.9, 311.4, 763.9, 310.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(816.9, 310.4);
  ctx.bezierCurveTo(817.9, 298.4, 819.9, 286.4, 819.9, 274.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(834.9, 283.4);
  ctx.bezierCurveTo(839.9, 293.4, 839.9, 305.4, 843.9, 315.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(810.9, 317.4);
  ctx.bezierCurveTo(807.9, 316.4, 804.9, 315.4, 800.9, 315.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(804.9, 314.4);
  ctx.bezierCurveTo(802.9, 311.4, 800.9, 308.4, 799.9, 305.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(761.9, 306.4);
  ctx.bezierCurveTo(766.9, 305.4, 771.9, 304.4, 776.9, 302.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(773.9, 304.4);
  ctx.bezierCurveTo(780.9, 303.4, 785.9, 302.4, 791.9, 300.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(788.9, 305.4);
  ctx.bezierCurveTo(791.9, 305.4, 794.9, 305.4, 795.9, 303.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(794.9, 302.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(849.9, 309.4);
  ctx.bezierCurveTo(849.9, 305.4, 850.9, 302.4, 850.9, 299.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(851.9, 310.4);
  ctx.bezierCurveTo(850.9, 311.4, 850.9, 312.4, 849.9, 313.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(845.9, 318.4);
  ctx.bezierCurveTo(845.9, 315.4, 846.9, 313.4, 847.9, 310.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(856.9, 299.4);
  ctx.bezierCurveTo(857.9, 299.4, 858.9, 298.4, 859.9, 298.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(857.9, 302.4);
  ctx.bezierCurveTo(861.9, 301.4, 865.9, 301.4, 868.9, 301.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(868.9, 297.4);
  ctx.bezierCurveTo(872.9, 297.4, 875.9, 297.4, 879.9, 297.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(878.9, 301.4);
  ctx.bezierCurveTo(873.9, 301.4, 869.9, 300.4, 864.9, 300.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(881.9, 300.4);
  ctx.bezierCurveTo(883.9, 300.4, 886.9, 300.4, 888.9, 300.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(892.9, 299.4);
  ctx.bezierCurveTo(891.9, 299.4, 891.9, 299.4, 891.9, 299.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(877.9, 299.4);
  ctx.bezierCurveTo(875.9, 299.4, 873.9, 299.4, 871.9, 299.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(574.9, 473.4);
  ctx.bezierCurveTo(568.9, 461.4, 558.9, 453.4, 551.9, 442.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(738.9, 347.4);
  ctx.bezierCurveTo(741.9, 344.4, 742.9, 342.4, 747.9, 341.4);
  ctx.bezierCurveTo(742.9, 343.4, 742.9, 343.4, 739.9, 346.4);
  ctx.bezierCurveTo(743.9, 345.4, 749.9, 345.4, 753.9, 343.4);
  ctx.bezierCurveTo(750.9, 346.4, 749.9, 346.4, 745.9, 347.4);
  ctx.bezierCurveTo(745.9, 345.4, 746.9, 343.4, 747.9, 341.4);
  ctx.bezierCurveTo(747.9, 341.4, 748.9, 345.4, 748.9, 346.4);
  ctx.bezierCurveTo(743.9, 345.4, 739.9, 346.4, 741.9, 346.4);
  ctx.lineWidth = line_width;
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(730.9, 337.4);
  ctx.bezierCurveTo(730.9, 340.4, 730.9, 343.4, 729.9, 346.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(732.9, 338.4);
  ctx.bezierCurveTo(732.9, 342.4, 732.9, 345.4, 731.9, 349.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(730.9, 349.4);
  ctx.bezierCurveTo(732.9, 362.4, 747.9, 373.4, 758.9, 363.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(759.9, 356.4);
  ctx.bezierCurveTo(756.9, 357.4, 753.9, 358.4, 750.9, 360.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(758.9, 358.4);
  ctx.bezierCurveTo(755.9, 359.4, 753.9, 361.4, 751.9, 361.4);
  ctx.bezierCurveTo(753.9, 360.4, 755.9, 359.4, 757.9, 358.4);
  ctx.bezierCurveTo(753.9, 361.4, 747.9, 362.4, 742.9, 362.4);
  ctx.bezierCurveTo(746.9, 361.4, 750.9, 361.4, 754.9, 361.4);
  ctx.bezierCurveTo(751.9, 361.4, 747.9, 362.4, 744.9, 363.4);
  ctx.bezierCurveTo(747.9, 363.4, 748.9, 362.4, 751.9, 362.4);
  ctx.bezierCurveTo(750.9, 361.4, 748.9, 364.4, 747.9, 363.4);
  ctx.bezierCurveTo(752.9, 362.4, 753.9, 362.4, 757.9, 359.4);
  ctx.bezierCurveTo(753.9, 360.4, 748.9, 362.4, 745.9, 364.4);
  ctx.bezierCurveTo(761.9, 365.4, 760.9, 346.4, 763.9, 335.4);
  ctx.bezierCurveTo(763.9, 347.4, 764.9, 361.4, 749.9, 364.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(733.9, 339.4);
  ctx.bezierCurveTo(742.9, 337.4, 750.9, 338.4, 758.9, 338.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(733.9, 336.4);
  ctx.bezierCurveTo(741.9, 335.4, 749.9, 335.4, 757.9, 335.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(761.9, 335.4);
  ctx.bezierCurveTo(758.9, 335.4, 756.9, 335.4, 754.9, 335.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(759.9, 337.4);
  ctx.bezierCurveTo(754.9, 337.4, 749.9, 337.4, 745.9, 337.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(750.9, 334.4);
  ctx.bezierCurveTo(748.9, 334.4, 747.9, 334.4, 746.9, 334.4);
  ctx.bezierCurveTo(751.9, 333.4, 755.9, 335.4, 760.9, 336.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(759.9, 341.4);
  ctx.bezierCurveTo(754.9, 343.4, 749.9, 346.4, 744.9, 348.4);
  ctx.bezierCurveTo(748.9, 346.4, 753.9, 342.4, 756.9, 340.4);
  ctx.bezierCurveTo(751.9, 339.4, 747.9, 340.4, 743.9, 342.4);
  ctx.bezierCurveTo(744.9, 343.4, 745.9, 342.4, 747.9, 343.4);
  ctx.bezierCurveTo(742.9, 345.4, 737.9, 345.4, 733.9, 344.4);
  ctx.bezierCurveTo(734.9, 343.4, 737.9, 341.4, 738.9, 340.4);
  ctx.bezierCurveTo(737.9, 341.4, 735.9, 340.4, 735.9, 341.4);
  ctx.bezierCurveTo(735.9, 341.4, 738.9, 340.4, 739.9, 340.4);
  ctx.bezierCurveTo(740.9, 343.4, 739.9, 344.4, 739.9, 346.4);
  ctx.bezierCurveTo(738.9, 345.4, 738.9, 342.4, 739.9, 342.4);
  ctx.bezierCurveTo(737.9, 343.4, 737.9, 346.4, 736.9, 346.4);
  ctx.bezierCurveTo(735.9, 346.4, 735.9, 345.4, 735.9, 345.4);
  ctx.bezierCurveTo(736.9, 350.4, 737.9, 354.4, 739.9, 359.4);
  ctx.bezierCurveTo(738.9, 355.4, 735.9, 352.4, 734.9, 349.4);
  ctx.bezierCurveTo(735.9, 354.4, 736.9, 355.4, 739.9, 359.4);
  ctx.bezierCurveTo(739.9, 355.4, 739.9, 350.4, 738.9, 347.4);
  ctx.bezierCurveTo(739.9, 351.4, 739.9, 354.4, 740.9, 358.4);
  ctx.bezierCurveTo(740.9, 353.4, 739.9, 349.4, 738.9, 344.4);
  ctx.bezierCurveTo(738.9, 350.4, 738.9, 356.4, 739.9, 361.4);
  ctx.bezierCurveTo(739.9, 356.4, 739.9, 351.4, 739.9, 346.4);
  ctx.bezierCurveTo(740.9, 351.4, 741.9, 357.4, 741.9, 362.4);
  ctx.bezierCurveTo(741.9, 357.4, 741.9, 352.4, 741.9, 347.4);
  ctx.bezierCurveTo(741.9, 352.4, 742.9, 357.4, 742.9, 361.4);
  ctx.bezierCurveTo(742.9, 355.4, 742.9, 350.4, 742.9, 344.4);
  ctx.bezierCurveTo(743.9, 350.4, 743.9, 356.4, 743.9, 362.4);
  ctx.bezierCurveTo(742.9, 357.4, 742.9, 351.4, 743.9, 345.4);
  ctx.bezierCurveTo(744.9, 348.4, 745.9, 351.4, 745.9, 355.4);
  ctx.bezierCurveTo(745.9, 352.4, 746.9, 349.4, 746.9, 346.4);
  ctx.bezierCurveTo(746.9, 351.4, 745.9, 356.4, 745.9, 361.4);
  ctx.bezierCurveTo(744.9, 355.4, 744.9, 349.4, 747.9, 343.4);
  ctx.bezierCurveTo(747.9, 348.4, 748.9, 352.4, 748.9, 357.4);
  ctx.bezierCurveTo(747.9, 353.4, 747.9, 350.4, 747.9, 346.4);
  ctx.bezierCurveTo(748.9, 349.4, 749.9, 352.4, 749.9, 355.4);
  ctx.bezierCurveTo(750.9, 351.4, 751.9, 348.4, 751.9, 345.4);
  ctx.bezierCurveTo(751.9, 348.4, 752.9, 351.4, 752.9, 354.4);
  ctx.bezierCurveTo(752.9, 350.4, 754.9, 347.4, 755.9, 344.4);
  ctx.bezierCurveTo(755.9, 344.4, 756.9, 344.4, 756.9, 345.4);
  ctx.bezierCurveTo(758.9, 342.4, 758.9, 343.4, 759.9, 343.4);
  ctx.bezierCurveTo(759.9, 341.4, 758.9, 339.4, 757.9, 337.4);
  ctx.bezierCurveTo(757.9, 340.4, 756.9, 342.4, 755.9, 344.4);
  ctx.bezierCurveTo(750.9, 340.4, 745.9, 339.4, 739.9, 340.4);
  ctx.bezierCurveTo(754.9, 334.4, 754.9, 355.4, 747.9, 359.4);
  ctx.bezierCurveTo(749.9, 355.4, 753.9, 351.4, 756.9, 348.4);
  ctx.bezierCurveTo(756.9, 349.4, 756.9, 351.4, 756.9, 354.4);
  ctx.bezierCurveTo(756.9, 352.4, 757.9, 348.4, 756.9, 346.4);
  ctx.bezierCurveTo(756.9, 350.4, 755.9, 353.4, 754.9, 357.4);
  ctx.bezierCurveTo(753.9, 354.4, 754.9, 353.4, 755.9, 350.4);
  ctx.bezierCurveTo(758.9, 349.4, 756.9, 352.4, 758.9, 352.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(756.9, 343.4);
  ctx.bezierCurveTo(758.9, 346.4, 758.9, 349.4, 757.9, 349.4);
  ctx.bezierCurveTo(757.9, 355.4, 753.9, 360.4, 748.9, 362.4);
  ctx.bezierCurveTo(748.9, 359.4, 748.9, 358.4, 749.9, 355.4);
  ctx.bezierCurveTo(751.9, 356.4, 749.9, 358.4, 751.9, 359.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(728.9, 342.4);
  ctx.bezierCurveTo(728.9, 342.4, 724.9, 341.4, 729.9, 342.4);
  ctx.bezierCurveTo(729.9, 343.4, 727.9, 344.4, 727.9, 344.4);
  ctx.bezierCurveTo(727.9, 343.4, 729.9, 340.4, 730.9, 338.4);
  ctx.bezierCurveTo(727.9, 341.4, 728.9, 342.4, 727.9, 346.4);
  ctx.bezierCurveTo(727.9, 346.4, 724.9, 344.4, 725.9, 344.4);
  ctx.bezierCurveTo(728.9, 343.4, 731.9, 345.4, 734.9, 345.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(768.9, 356.4);
  ctx.bezierCurveTo(769.9, 355.4, 765.9, 354.4, 770.9, 355.4);
  ctx.lineTo(770.9, 355.4);
  ctx.bezierCurveTo(769.9, 355.4, 769.9, 355.4, 768.9, 354.4);
  ctx.bezierCurveTo(767.9, 357.4, 765.9, 355.4, 763.9, 356.4);
  ctx.bezierCurveTo(763.9, 356.4, 767.9, 357.4, 768.9, 357.4);
  ctx.bezierCurveTo(767.9, 351.4, 764.9, 354.4, 762.9, 353.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(898.9, 335.4);
  ctx.bezierCurveTo(907.9, 333.4, 915.9, 333.4, 924.9, 333.4);
  ctx.bezierCurveTo(917.9, 333.4, 910.9, 333.4, 902.9, 333.4);
  ctx.bezierCurveTo(909.9, 333.4, 916.9, 333.4, 923.9, 332.4);
  ctx.bezierCurveTo(920.9, 332.4, 911.9, 332.4, 912.9, 332.4);
  ctx.bezierCurveTo(914.9, 332.4, 916.9, 332.4, 919.9, 332.4);
  ctx.bezierCurveTo(909.9, 330.4, 899.9, 331.4, 902.9, 343.4);
  ctx.bezierCurveTo(902.9, 343.4, 902.9, 343.4, 902.9, 342.4);
  ctx.bezierCurveTo(903.9, 343.4, 900.9, 338.4, 901.9, 339.4);
  ctx.bezierCurveTo(898.9, 349.4, 914.9, 358.4, 921.9, 350.4);
  ctx.bezierCurveTo(930.9, 339.4, 916.9, 331.4, 906.9, 334.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(904.9, 345.4);
  ctx.bezierCurveTo(906.9, 349.4, 904.9, 351.4, 909.9, 353.4);
  ctx.bezierCurveTo(903.9, 352.4, 900.9, 348.4, 899.9, 342.4);
  ctx.bezierCurveTo(899.9, 348.4, 904.9, 353.4, 911.9, 353.4);
  ctx.bezierCurveTo(909.9, 353.4, 907.9, 354.4, 905.9, 353.4);
  ctx.bezierCurveTo(916.9, 353.4, 919.9, 347.4, 920.9, 337.4);
  ctx.bezierCurveTo(921.9, 343.4, 921.9, 344.4, 917.9, 348.4);
  ctx.bezierCurveTo(917.9, 345.4, 915.9, 341.4, 915.9, 338.4);
  ctx.bezierCurveTo(915.9, 341.4, 914.9, 346.4, 914.9, 349.4);
  ctx.bezierCurveTo(913.9, 346.4, 911.9, 342.4, 910.9, 338.4);
  ctx.bezierCurveTo(910.9, 341.4, 908.9, 346.4, 908.9, 349.4);
  ctx.bezierCurveTo(905.9, 344.4, 904.9, 338.4, 904.9, 332.4);
  ctx.bezierCurveTo(905.9, 336.4, 907.9, 339.4, 907.9, 342.4);
  ctx.bezierCurveTo(911.9, 337.4, 909.9, 339.4, 914.9, 335.4);
  ctx.bezierCurveTo(912.9, 336.4, 910.9, 336.4, 909.9, 337.4);
  ctx.bezierCurveTo(910.9, 337.4, 915.9, 338.4, 915.9, 338.4);
  ctx.bezierCurveTo(915.9, 337.4, 915.9, 337.4, 915.9, 336.4);
  ctx.bezierCurveTo(915.9, 337.4, 917.9, 337.4, 918.9, 337.4);
  ctx.bezierCurveTo(913.9, 337.4, 909.9, 337.4, 904.9, 336.4);
  ctx.bezierCurveTo(912.9, 337.4, 911.9, 346.4, 907.9, 352.4);
  ctx.bezierCurveTo(912.9, 354.4, 917.9, 353.4, 921.9, 350.4);
  ctx.bezierCurveTo(918.9, 349.4, 915.9, 349.4, 913.9, 349.4);
  ctx.bezierCurveTo(912.9, 349.4, 918.9, 348.4, 920.9, 348.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(911.9, 349.4);
  ctx.bezierCurveTo(911.9, 352.4, 910.9, 355.4, 908.9, 356.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(907.9, 352.4);
  ctx.bezierCurveTo(910.9, 352.4, 912.9, 353.4, 914.9, 353.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(871.9, 350.4);
  ctx.bezierCurveTo(876.9, 353.4, 881.9, 354.4, 887.9, 353.4);
  ctx.bezierCurveTo(884.9, 354.4, 880.9, 354.4, 877.9, 354.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(777.9, 470.4);
  ctx.bezierCurveTo(777.9, 475.4, 776.9, 481.4, 775.9, 485.4);
  ctx.bezierCurveTo(774.9, 480.4, 776.9, 473.4, 779.9, 469.4);
  ctx.bezierCurveTo(778.9, 468.4, 777.9, 468.4, 776.9, 468.4);
  ctx.bezierCurveTo(774.9, 473.4, 773.9, 478.4, 774.9, 484.4);
  ctx.bezierCurveTo(774.9, 478.4, 777.9, 476.4, 778.9, 471.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(678.9, 345.4);
  ctx.bezierCurveTo(678.9, 353.4, 678.9, 360.4, 680.9, 367.4);
  ctx.bezierCurveTo(677.9, 358.4, 672.9, 351.4, 664.9, 347.4);
  ctx.bezierCurveTo(667.9, 346.4, 669.9, 346.4, 672.9, 346.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(673.9, 345.4);
  ctx.bezierCurveTo(672.9, 350.4, 673.9, 355.4, 674.9, 359.4);
  ctx.bezierCurveTo(674.9, 356.4, 675.9, 352.4, 675.9, 349.4);
  ctx.bezierCurveTo(676.9, 356.4, 676.9, 363.4, 676.9, 370.4);
  ctx.bezierCurveTo(675.9, 363.4, 673.9, 356.4, 668.9, 351.4);
  ctx.bezierCurveTo(671.9, 358.4, 677.9, 363.4, 682.9, 368.4);
  ctx.bezierCurveTo(679.9, 361.4, 678.9, 353.4, 679.9, 346.4);
  ctx.bezierCurveTo(681.9, 350.4, 681.9, 354.4, 680.9, 359.4);
  ctx.bezierCurveTo(678.9, 354.4, 679.9, 348.4, 680.9, 342.4);
  ctx.bezierCurveTo(681.9, 346.4, 681.9, 349.4, 680.9, 353.4);
  ctx.bezierCurveTo(681.9, 350.4, 681.9, 348.4, 682.9, 345.4);
  ctx.bezierCurveTo(684.9, 354.4, 682.9, 363.4, 682.9, 372.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(676.9, 367.4);
  ctx.bezierCurveTo(684.9, 374.4, 684.9, 387.4, 685.9, 396.4);
  ctx.bezierCurveTo(685.9, 385.4, 675.9, 379.4, 676.9, 369.4);
  ctx.bezierCurveTo(678.9, 374.4, 680.9, 379.4, 682.9, 383.4);
  ctx.bezierCurveTo(681.9, 378.4, 681.9, 373.4, 681.9, 367.4);
  ctx.bezierCurveTo(688.9, 374.4, 690.9, 392.4, 693.9, 402.4);
  ctx.bezierCurveTo(690.9, 396.4, 688.9, 391.4, 686.9, 385.4);
  ctx.bezierCurveTo(687.9, 393.4, 691.9, 400.4, 694.9, 407.4);
  ctx.bezierCurveTo(691.9, 403.4, 688.9, 400.4, 687.9, 395.4);
  ctx.bezierCurveTo(687.9, 402.4, 688.9, 410.4, 693.9, 415.4);
  ctx.bezierCurveTo(692.9, 411.4, 692.9, 407.4, 691.9, 403.4);
  ctx.bezierCurveTo(695.9, 407.4, 699.9, 413.4, 701.9, 419.4);
  ctx.bezierCurveTo(700.9, 412.4, 698.9, 405.4, 692.9, 401.4);
  ctx.bezierCurveTo(695.9, 406.4, 697.9, 412.4, 698.9, 418.4);
  ctx.bezierCurveTo(696.9, 417.4, 695.9, 415.4, 694.9, 413.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(703.9, 418.4);
  ctx.bezierCurveTo(708.9, 421.4, 713.9, 424.4, 718.9, 424.4);
  ctx.bezierCurveTo(713.9, 422.4, 708.9, 419.4, 703.9, 416.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(703.9, 420.4);
  ctx.bezierCurveTo(709.9, 421.4, 715.9, 422.4, 720.9, 423.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(723.9, 427.4);
  ctx.bezierCurveTo(718.9, 424.4, 713.9, 422.4, 707.9, 421.4);
  ctx.bezierCurveTo(713.9, 427.4, 723.9, 428.4, 731.9, 428.4);
  ctx.bezierCurveTo(722.9, 426.4, 713.9, 426.4, 704.9, 423.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(722.9, 424.4);
  ctx.bezierCurveTo(725.9, 424.4, 729.9, 424.4, 733.9, 424.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(723.9, 426.4);
  ctx.bezierCurveTo(731.9, 426.4, 739.9, 428.4, 746.9, 424.4);
  ctx.bezierCurveTo(742.9, 424.4, 737.9, 424.4, 733.9, 425.4);
  ctx.bezierCurveTo(739.9, 425.4, 746.9, 425.4, 752.9, 425.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(723.9, 429.4);
  ctx.bezierCurveTo(734.9, 428.4, 745.9, 428.4, 756.9, 423.4);
  ctx.bezierCurveTo(746.9, 427.4, 736.9, 426.4, 726.9, 427.4);
  ctx.bezierCurveTo(732.9, 429.4, 739.9, 429.4, 745.9, 429.4);
  ctx.bezierCurveTo(739.9, 428.4, 732.9, 428.4, 726.9, 429.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(750.9, 426.4);
  ctx.bezierCurveTo(758.9, 426.4, 764.9, 420.4, 772.9, 418.4);
  ctx.bezierCurveTo(764.9, 418.4, 751.9, 423.4, 744.9, 426.4);
  ctx.bezierCurveTo(748.9, 427.4, 753.9, 427.4, 758.9, 425.4);
  ctx.bezierCurveTo(754.9, 425.4, 751.9, 425.4, 748.9, 425.4);
  ctx.bezierCurveTo(764.9, 428.4, 780.9, 413.4, 790.9, 403.4);
  ctx.bezierCurveTo(784.9, 415.4, 761.9, 423.4, 748.9, 426.4);
  ctx.bezierCurveTo(753.9, 425.4, 759.9, 425.4, 765.9, 423.4);
  ctx.bezierCurveTo(759.9, 424.4, 753.9, 426.4, 748.9, 429.4);
  ctx.bezierCurveTo(762.9, 425.4, 777.9, 418.4, 788.9, 408.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(704.9, 324.4);
  ctx.bezierCurveTo(717.9, 322.4, 729.9, 318.4, 742.9, 319.4);
  ctx.bezierCurveTo(732.9, 319.4, 722.9, 321.4, 712.9, 323.4);
  ctx.bezierCurveTo(721.9, 323.4, 731.9, 322.4, 740.9, 322.4);
  ctx.bezierCurveTo(737.9, 322.4, 735.9, 321.4, 732.9, 321.4);
  ctx.bezierCurveTo(738.9, 321.4, 744.9, 321.4, 750.9, 320.4);
  ctx.bezierCurveTo(743.9, 320.4, 737.9, 320.4, 731.9, 319.4);
  ctx.bezierCurveTo(747.9, 320.4, 764.9, 322.4, 780.9, 322.4);
  ctx.bezierCurveTo(767.9, 315.4, 747.9, 319.4, 733.9, 319.4);
  ctx.bezierCurveTo(744.9, 322.4, 757.9, 321.4, 768.9, 321.4);
  ctx.bezierCurveTo(746.9, 317.4, 726.9, 316.4, 704.9, 319.4);
  ctx.bezierCurveTo(713.9, 321.4, 724.9, 320.4, 734.9, 320.4);
  ctx.bezierCurveTo(730.9, 319.4, 726.9, 318.4, 722.9, 318.4);
  ctx.bezierCurveTo(724.9, 318.4, 727.9, 317.4, 729.9, 317.4);
  ctx.bezierCurveTo(722.9, 316.4, 714.9, 317.4, 708.9, 320.4);
  ctx.bezierCurveTo(711.9, 320.4, 715.9, 321.4, 718.9, 321.4);
  ctx.bezierCurveTo(710.9, 321.4, 702.9, 323.4, 695.9, 325.4);
  ctx.bezierCurveTo(697.9, 324.4, 700.9, 323.4, 702.9, 322.4);
  ctx.bezierCurveTo(695.9, 320.4, 687.9, 324.4, 681.9, 328.4);
  ctx.bezierCurveTo(684.9, 328.4, 687.9, 328.4, 691.9, 327.4);
  ctx.bezierCurveTo(683.9, 326.4, 678.9, 332.4, 677.9, 338.4);
  ctx.bezierCurveTo(678.9, 337.4, 680.9, 334.4, 681.9, 333.4);
  ctx.bezierCurveTo(674.9, 335.4, 667.9, 340.4, 659.9, 339.4);
  ctx.bezierCurveTo(664.9, 337.4, 670.9, 336.4, 675.9, 335.4);
  ctx.bezierCurveTo(670.9, 335.4, 664.9, 335.4, 659.9, 335.4);
  ctx.bezierCurveTo(665.9, 335.4, 671.9, 335.4, 677.9, 334.4);
  ctx.bezierCurveTo(675.9, 334.4, 672.9, 334.4, 670.9, 334.4);
  ctx.bezierCurveTo(672.9, 333.4, 676.9, 331.4, 678.9, 331.4);
  ctx.bezierCurveTo(676.9, 332.4, 673.9, 333.4, 670.9, 334.4);
  ctx.bezierCurveTo(675.9, 333.4, 679.9, 331.4, 683.9, 330.4);
  ctx.bezierCurveTo(677.9, 330.4, 670.9, 332.4, 664.9, 332.4);
  ctx.bezierCurveTo(669.9, 333.4, 675.9, 332.4, 680.9, 329.4);
  ctx.bezierCurveTo(677.9, 330.4, 673.9, 330.4, 669.9, 331.4);
  ctx.bezierCurveTo(671.9, 330.4, 674.9, 329.4, 675.9, 328.4);
  ctx.bezierCurveTo(668.9, 327.4, 664.9, 333.4, 658.9, 335.4);
  ctx.lineTo(660.9, 331.4);
  ctx.bezierCurveTo(660.9, 334.4, 662.9, 335.4, 664.9, 336.4);
  ctx.bezierCurveTo(665.9, 336.4, 660.9, 339.4, 661.9, 338.4);
  ctx.bezierCurveTo(666.9, 333.4, 674.9, 332.4, 681.9, 331.4);
  ctx.bezierCurveTo(675.9, 329.4, 668.9, 330.4, 661.9, 332.4);
  ctx.bezierCurveTo(668.9, 331.4, 676.9, 329.4, 683.9, 326.4);
  ctx.bezierCurveTo(675.9, 327.4, 667.9, 330.4, 660.9, 331.4);
  ctx.bezierCurveTo(671.9, 332.4, 684.9, 330.4, 695.9, 326.4);
  ctx.bezierCurveTo(692.9, 324.4, 689.9, 326.4, 685.9, 326.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(784.9, 320.4);
  ctx.bezierCurveTo(767.9, 319.4, 750.9, 316.4, 733.9, 316.4);
  ctx.bezierCurveTo(750.9, 314.4, 769.9, 313.4, 785.9, 316.4);
  ctx.bezierCurveTo(802.9, 318.4, 818.9, 324.4, 836.9, 321.4);
  ctx.bezierCurveTo(828.9, 319.4, 818.9, 320.4, 810.9, 321.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(810.9, 346.4);
  ctx.bezierCurveTo(811.9, 338.4, 811.9, 331.4, 811.9, 323.4);
  ctx.bezierCurveTo(812.9, 330.4, 813.9, 339.4, 810.9, 344.4);
  ctx.bezierCurveTo(809.9, 338.4, 808.9, 331.4, 807.9, 324.4);
  ctx.bezierCurveTo(809.9, 331.4, 810.9, 339.4, 807.9, 346.4);
  ctx.bezierCurveTo(804.9, 340.4, 803.9, 332.4, 803.9, 325.4);
  ctx.bezierCurveTo(808.9, 330.4, 809.9, 337.4, 807.9, 343.4);
  ctx.bezierCurveTo(802.9, 340.4, 799.9, 335.4, 796.9, 330.4);
  ctx.bezierCurveTo(797.9, 333.4, 799.9, 337.4, 801.9, 340.4);
  ctx.bezierCurveTo(805.9, 327.4, 789.9, 324.4, 780.9, 322.4);
  ctx.bezierCurveTo(787.9, 322.4, 795.9, 323.4, 803.9, 325.4);
  ctx.bezierCurveTo(798.9, 326.4, 795.9, 326.4, 791.9, 325.4);
  ctx.bezierCurveTo(796.9, 325.4, 801.9, 328.4, 804.9, 332.4);
  ctx.bezierCurveTo(811.9, 315.4, 776.9, 319.4, 766.9, 318.4);
  ctx.bezierCurveTo(771.9, 318.4, 775.9, 318.4, 779.9, 319.4);
  ctx.bezierCurveTo(773.9, 318.4, 767.9, 318.4, 761.9, 317.4);
  ctx.bezierCurveTo(774.9, 317.4, 785.9, 318.4, 797.9, 323.4);
  ctx.bezierCurveTo(792.9, 324.4, 786.9, 324.4, 782.9, 322.4);
  ctx.bezierCurveTo(789.9, 323.4, 797.9, 327.4, 804.9, 324.4);
  ctx.bezierCurveTo(799.9, 321.4, 792.9, 320.4, 786.9, 321.4);
  ctx.bezierCurveTo(787.9, 321.4, 790.9, 323.4, 790.9, 324.4);
  ctx.bezierCurveTo(790.9, 322.4, 790.9, 320.4, 791.9, 318.4);
  ctx.bezierCurveTo(796.9, 321.4, 805.9, 323.4, 812.9, 322.4);
  ctx.bezierCurveTo(810.9, 323.4, 808.9, 323.4, 807.9, 324.4);
  ctx.bezierCurveTo(807.9, 325.4, 807.9, 325.4, 807.9, 324.4);
  ctx.bezierCurveTo(806.9, 320.4, 804.9, 323.4, 802.9, 321.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(806.9, 341.4);
  ctx.bezierCurveTo(806.9, 345.4, 808.9, 346.4, 806.9, 349.4);
  ctx.bezierCurveTo(806.9, 347.4, 805.9, 341.4, 805.9, 342.4);
  ctx.bezierCurveTo(805.9, 343.4, 804.9, 344.4, 804.9, 346.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(923.9, 335.4);
  ctx.bezierCurveTo(921.9, 336.4, 924.9, 342.4, 920.9, 337.4);
  ctx.bezierCurveTo(919.9, 341.4, 918.9, 345.4, 918.9, 350.4);
  ctx.bezierCurveTo(921.9, 341.4, 914.9, 337.4, 907.9, 334.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(811.9, 345.4);
  ctx.bezierCurveTo(816.9, 338.4, 825.9, 332.4, 834.9, 331.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(812.9, 344.4);
  ctx.bezierCurveTo(820.9, 341.4, 826.9, 338.4, 834.9, 337.4);
  ctx.bezierCurveTo(825.9, 337.4, 817.9, 341.4, 809.9, 346.4);
  ctx.bezierCurveTo(817.9, 341.4, 825.9, 337.4, 833.9, 333.4);
  ctx.bezierCurveTo(826.9, 334.4, 819.9, 338.4, 812.9, 340.4);
  ctx.bezierCurveTo(819.9, 336.4, 825.9, 331.4, 833.9, 329.4);
  ctx.bezierCurveTo(828.9, 332.4, 822.9, 335.4, 817.9, 337.4);
  ctx.bezierCurveTo(824.9, 332.4, 831.9, 328.4, 838.9, 323.4);
  ctx.bezierCurveTo(831.9, 328.4, 824.9, 334.4, 816.9, 336.4);
  ctx.bezierCurveTo(821.9, 331.4, 828.9, 327.4, 834.9, 323.4);
  ctx.bezierCurveTo(826.9, 325.4, 820.9, 331.4, 812.9, 334.4);
  ctx.bezierCurveTo(818.9, 331.4, 826.9, 324.4, 834.9, 320.4);
  ctx.bezierCurveTo(826.9, 327.4, 820.9, 336.4, 810.9, 338.4);
  ctx.bezierCurveTo(812.9, 332.4, 816.9, 326.4, 821.9, 323.4);
  ctx.bezierCurveTo(820.9, 325.4, 820.9, 326.4, 819.9, 329.4);
  ctx.bezierCurveTo(822.9, 327.4, 823.9, 327.4, 826.9, 324.4);
  ctx.bezierCurveTo(821.9, 326.4, 818.9, 327.4, 814.9, 330.4);
  ctx.bezierCurveTo(811.9, 326.4, 810.9, 326.4, 811.9, 321.4);
  ctx.bezierCurveTo(813.9, 324.4, 814.9, 326.4, 816.9, 329.4);
  ctx.bezierCurveTo(816.9, 328.4, 816.9, 327.4, 816.9, 326.4);
  ctx.bezierCurveTo(815.9, 326.4, 815.9, 327.4, 815.9, 328.4);
  ctx.bezierCurveTo(816.9, 325.4, 817.9, 324.4, 817.9, 323.4);
  ctx.bezierCurveTo(815.9, 327.4, 815.9, 333.4, 814.9, 337.4);
  ctx.bezierCurveTo(821.9, 338.4, 827.9, 336.4, 833.9, 332.4);
  ctx.bezierCurveTo(831.9, 334.4, 828.9, 335.4, 826.9, 335.4);
  ctx.bezierCurveTo(826.9, 336.4, 830.9, 336.4, 830.9, 335.4);
  ctx.bezierCurveTo(829.9, 335.4, 825.9, 333.4, 825.9, 332.4);
  ctx.bezierCurveTo(827.9, 332.4, 830.9, 332.4, 832.9, 333.4);
  ctx.bezierCurveTo(828.9, 327.4, 829.9, 319.4, 837.9, 321.4);
  ctx.bezierCurveTo(837.9, 323.4, 835.9, 323.4, 835.9, 323.4);
  ctx.bezierCurveTo(839.9, 324.4, 841.9, 323.4, 837.9, 323.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(707.9, 350.4);
  ctx.bezierCurveTo(705.9, 353.4, 702.9, 357.4, 701.9, 360.4);
  ctx.bezierCurveTo(707.9, 359.4, 711.9, 356.4, 714.9, 351.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(707.9, 357.4);
  ctx.bezierCurveTo(707.9, 356.4, 708.9, 353.4, 708.9, 352.4);
  ctx.bezierCurveTo(707.9, 352.4, 706.9, 353.4, 705.9, 354.4);
  ctx.bezierCurveTo(703.9, 356.4, 707.9, 352.4, 707.9, 353.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(706.9, 354.4);
  ctx.bezierCurveTo(706.9, 354.4, 714.9, 348.4, 705.9, 343.4);
  ctx.bezierCurveTo(708.9, 344.4, 708.9, 347.4, 709.9, 349.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(829.9, 338.4);
  ctx.bezierCurveTo(840.9, 335.4, 849.9, 343.4, 854.9, 351.4);
  ctx.bezierCurveTo(847.9, 347.4, 843.9, 331.4, 833.9, 334.4);
  ctx.bezierCurveTo(834.9, 329.4, 836.9, 325.4, 838.9, 321.4);
  ctx.bezierCurveTo(838.9, 326.4, 837.9, 331.4, 834.9, 335.4);
  ctx.bezierCurveTo(838.9, 332.4, 840.9, 328.4, 843.9, 323.4);
  ctx.bezierCurveTo(842.9, 324.4, 841.9, 326.4, 840.9, 328.4);
  ctx.bezierCurveTo(843.9, 326.4, 848.9, 324.4, 851.9, 321.4);
  ctx.bezierCurveTo(847.9, 323.4, 844.9, 325.4, 841.9, 327.4);
  ctx.bezierCurveTo(852.9, 319.4, 867.9, 313.4, 881.9, 311.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(858.9, 319.4);
  ctx.bezierCurveTo(846.9, 328.4, 847.9, 343.4, 855.9, 354.4);
  ctx.bezierCurveTo(853.9, 344.4, 852.9, 332.4, 854.9, 322.4);
  ctx.bezierCurveTo(856.9, 330.4, 854.9, 338.4, 852.9, 346.4);
  ctx.bezierCurveTo(852.9, 337.4, 854.9, 329.4, 860.9, 323.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(860.9, 319.4);
  ctx.bezierCurveTo(860.9, 319.4, 865.9, 317.4, 862.9, 318.4);
  ctx.bezierCurveTo(856.9, 323.4, 849.9, 325.4, 846.9, 333.4);
  ctx.bezierCurveTo(847.9, 332.4, 847.9, 330.4, 848.9, 328.4);
  ctx.bezierCurveTo(847.9, 332.4, 844.9, 335.4, 843.9, 339.4);
  ctx.bezierCurveTo(842.9, 336.4, 842.9, 334.4, 842.9, 332.4);
  ctx.bezierCurveTo(840.9, 332.4, 838.9, 334.4, 836.9, 334.4);
  ctx.bezierCurveTo(838.9, 337.4, 841.9, 339.4, 844.9, 340.4);
  ctx.bezierCurveTo(844.9, 336.4, 845.9, 332.4, 843.9, 327.4);
  ctx.bezierCurveTo(842.9, 328.4, 842.9, 329.4, 842.9, 330.4);
  ctx.bezierCurveTo(844.9, 328.4, 846.9, 325.4, 848.9, 323.4);
  ctx.bezierCurveTo(846.9, 325.4, 844.9, 326.4, 842.9, 328.4);
  ctx.bezierCurveTo(845.9, 327.4, 848.9, 326.4, 851.9, 325.4);
  ctx.bezierCurveTo(848.9, 325.4, 845.9, 325.4, 842.9, 325.4);
  ctx.bezierCurveTo(846.9, 322.4, 851.9, 321.4, 856.9, 320.4);
  ctx.bezierCurveTo(856.9, 321.4, 855.9, 322.4, 854.9, 323.4);
  ctx.bezierCurveTo(863.9, 318.4, 873.9, 314.4, 882.9, 311.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(848.9, 349.4);
  ctx.bezierCurveTo(851.9, 366.4, 862.9, 381.4, 870.9, 396.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(853.9, 350.4);
  ctx.bezierCurveTo(854.9, 368.4, 863.9, 381.4, 871.9, 396.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(855.9, 354.4);
  ctx.bezierCurveTo(861.9, 368.4, 861.9, 382.4, 869.9, 395.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(862.9, 367.4);
  ctx.bezierCurveTo(862.9, 376.4, 861.9, 386.4, 867.9, 393.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(867.9, 393.4);
  ctx.bezierCurveTo(877.9, 398.4, 883.9, 407.4, 895.9, 407.4);
  ctx.bezierCurveTo(888.9, 405.4, 861.9, 397.4, 866.9, 391.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(845.9, 320.4);
  ctx.bezierCurveTo(857.9, 315.4, 871.9, 307.4, 884.9, 305.4);
  ctx.bezierCurveTo(871.9, 307.4, 859.9, 314.4, 848.9, 320.4);
  ctx.bezierCurveTo(857.9, 316.4, 865.9, 310.4, 874.9, 307.4);
  ctx.bezierCurveTo(864.9, 311.4, 849.9, 325.4, 838.9, 323.4);
  ctx.bezierCurveTo(842.9, 328.4, 843.9, 335.4, 845.9, 341.4);
  ctx.bezierCurveTo(846.9, 341.4, 847.9, 340.4, 847.9, 339.4);
  ctx.bezierCurveTo(844.9, 340.4, 844.9, 338.4, 842.9, 335.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(864.9, 310.4);
  ctx.bezierCurveTo(872.9, 310.4, 879.9, 309.4, 887.9, 307.4);
  ctx.bezierCurveTo(881.9, 308.4, 871.9, 310.4, 865.9, 314.4);
  ctx.bezierCurveTo(876.9, 312.4, 887.9, 308.4, 898.9, 308.4);
  ctx.bezierCurveTo(888.9, 308.4, 878.9, 309.4, 869.9, 311.4);
  ctx.bezierCurveTo(879.9, 309.4, 888.9, 305.4, 898.9, 304.4);
  ctx.bezierCurveTo(889.9, 304.4, 875.9, 301.4, 869.9, 309.4);
  ctx.bezierCurveTo(881.9, 311.4, 894.9, 304.4, 906.9, 303.4);
  ctx.bezierCurveTo(894.9, 305.4, 881.9, 310.4, 868.9, 310.4);
  ctx.bezierCurveTo(874.9, 307.4, 880.9, 304.4, 886.9, 303.4);
  ctx.bezierCurveTo(883.9, 305.4, 881.9, 306.4, 878.9, 308.4);
  ctx.bezierCurveTo(881.9, 307.4, 883.9, 306.4, 886.9, 306.4);
  ctx.bezierCurveTo(880.9, 304.4, 874.9, 306.4, 871.9, 310.4);
  ctx.bezierCurveTo(881.9, 313.4, 893.9, 308.4, 904.9, 308.4);
  ctx.bezierCurveTo(893.9, 307.4, 882.9, 308.4, 872.9, 312.4);
  ctx.bezierCurveTo(882.9, 313.4, 894.9, 311.4, 904.9, 308.4);
  ctx.bezierCurveTo(898.9, 308.4, 893.9, 308.4, 887.9, 310.4);
  ctx.bezierCurveTo(895.9, 310.4, 902.9, 309.4, 909.9, 308.4);
  ctx.bezierCurveTo(903.9, 307.4, 897.9, 307.4, 891.9, 307.4);
  ctx.bezierCurveTo(899.9, 307.4, 908.9, 306.4, 916.9, 305.4);
  ctx.bezierCurveTo(910.9, 306.4, 903.9, 306.4, 897.9, 307.4);
  ctx.bezierCurveTo(902.9, 307.4, 907.9, 306.4, 912.9, 306.4);
  ctx.bezierCurveTo(908.9, 305.4, 903.9, 305.4, 899.9, 305.4);
  ctx.bezierCurveTo(902.9, 305.4, 905.9, 305.4, 909.9, 305.4);
  ctx.bezierCurveTo(908.9, 305.4, 906.9, 305.4, 905.9, 305.4);
  ctx.bezierCurveTo(909.9, 305.4, 912.9, 305.4, 916.9, 304.4);
  ctx.bezierCurveTo(913.9, 304.4, 909.9, 304.4, 905.9, 304.4);
  ctx.bezierCurveTo(910.9, 304.4, 914.9, 304.4, 919.9, 304.4);
  ctx.bezierCurveTo(916.9, 304.4, 913.9, 303.4, 910.9, 303.4);
  ctx.bezierCurveTo(912.9, 303.4, 915.9, 302.4, 917.9, 302.4);
  ctx.bezierCurveTo(890.9, 301.4, 864.9, 311.4, 841.9, 321.4);
  ctx.bezierCurveTo(842.9, 322.4, 844.9, 322.4, 846.9, 322.4);
  ctx.bezierCurveTo(843.9, 328.4, 847.9, 334.4, 847.9, 341.4);
  ctx.bezierCurveTo(845.9, 344.4, 846.9, 341.4, 844.9, 340.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(907.9, 307.4);
  ctx.bezierCurveTo(916.9, 307.4, 924.9, 304.4, 933.9, 304.4);
  ctx.bezierCurveTo(927.9, 304.4, 922.9, 304.4, 916.9, 303.4);
  ctx.bezierCurveTo(928.9, 304.4, 941.9, 304.4, 953.9, 304.4);
  ctx.bezierCurveTo(942.9, 306.4, 929.9, 303.4, 917.9, 303.4);
  ctx.bezierCurveTo(927.9, 302.4, 939.9, 300.4, 949.9, 302.4);
  ctx.bezierCurveTo(938.9, 302.4, 927.9, 302.4, 915.9, 302.4);
  ctx.bezierCurveTo(926.9, 304.4, 937.9, 299.4, 948.9, 300.4);
  ctx.bezierCurveTo(937.9, 302.4, 926.9, 301.4, 915.9, 303.4);
  ctx.bezierCurveTo(934.9, 302.4, 949.9, 300.4, 966.9, 311.4);
  ctx.bezierCurveTo(962.9, 306.4, 956.9, 303.4, 951.9, 301.4);
  ctx.bezierCurveTo(963.9, 299.4, 976.9, 304.4, 988.9, 304.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(960.9, 303.4);
  ctx.bezierCurveTo(968.9, 306.4, 972.9, 313.4, 974.9, 320.4);
  ctx.bezierCurveTo(971.9, 318.4, 967.9, 314.4, 965.9, 310.4);
  ctx.bezierCurveTo(967.9, 312.4, 971.9, 315.4, 974.9, 318.4);
  ctx.bezierCurveTo(973.9, 312.4, 971.9, 308.4, 968.9, 303.4);
  ctx.bezierCurveTo(975.9, 307.4, 983.9, 310.4, 991.9, 310.4);
  ctx.bezierCurveTo(983.9, 310.4, 976.9, 309.4, 968.9, 308.4);
  ctx.bezierCurveTo(974.9, 307.4, 981.9, 307.4, 986.9, 306.4);
  ctx.bezierCurveTo(982.9, 304.4, 977.9, 303.4, 972.9, 303.4);
  ctx.bezierCurveTo(978.9, 305.4, 985.9, 306.4, 991.9, 307.4);
  ctx.bezierCurveTo(989.9, 306.4, 987.9, 305.4, 985.9, 304.4);
  ctx.bezierCurveTo(999.9, 297.4, 999.9, 314.4, 1002.9, 323.4);
  ctx.bezierCurveTo(1001.9, 320.4, 1001.9, 316.4, 1000.9, 313.4);
  ctx.bezierCurveTo(1000.9, 316.4, 999.9, 321.4, 1000.9, 324.4);
  ctx.bezierCurveTo(997.9, 318.4, 994.9, 312.4, 991.9, 306.4);
  ctx.bezierCurveTo(994.9, 308.4, 994.9, 309.4, 996.9, 312.4);
  ctx.bezierCurveTo(1000.9, 317.4, 1001.9, 323.4, 1000.9, 329.4);
  ctx.bezierCurveTo(999.9, 324.4, 999.9, 318.4, 998.9, 314.4);
  ctx.bezierCurveTo(1001.9, 318.4, 1002.9, 323.4, 1002.9, 328.4);
  ctx.bezierCurveTo(1000.9, 322.4, 1000.9, 317.4, 1000.9, 311.4);
  ctx.bezierCurveTo(1004.9, 320.4, 1003.9, 331.4, 991.9, 328.4);
  ctx.bezierCurveTo(991.9, 327.4, 994.9, 326.4, 994.9, 326.4);
  ctx.bezierCurveTo(994.9, 326.4, 990.9, 327.4, 991.9, 328.4);
  ctx.bezierCurveTo(995.9, 328.4, 998.9, 329.4, 1002.9, 330.4);
  ctx.bezierCurveTo(999.9, 331.4, 995.9, 330.4, 992.9, 330.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(954.9, 316.4);
  ctx.bezierCurveTo(959.9, 327.4, 960.9, 348.4, 959.9, 359.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(958.9, 350.4);
  ctx.bezierCurveTo(957.9, 342.4, 955.9, 335.4, 957.9, 328.4);
  ctx.bezierCurveTo(957.9, 339.4, 955.9, 351.4, 955.9, 362.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(958.9, 348.4);
  ctx.bezierCurveTo(960.9, 336.4, 957.9, 326.4, 955.9, 315.4);
  ctx.bezierCurveTo(962.9, 320.4, 963.9, 330.4, 961.9, 338.4);
  ctx.bezierCurveTo(961.9, 332.4, 959.9, 326.4, 955.9, 322.4);
  ctx.bezierCurveTo(955.9, 326.4, 955.9, 330.4, 956.9, 334.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(969.9, 314.4);
  ctx.bezierCurveTo(975.9, 320.4, 984.9, 318.4, 991.9, 318.4);
  ctx.bezierCurveTo(985.9, 317.4, 978.9, 316.4, 972.9, 316.4);
  ctx.bezierCurveTo(978.9, 318.4, 993.9, 318.4, 994.9, 318.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(989.9, 317.4);
  ctx.bezierCurveTo(990.9, 320.4, 992.9, 322.4, 993.9, 324.4);
  ctx.bezierCurveTo(993.9, 323.4, 993.9, 319.4, 993.9, 318.4);
  ctx.bezierCurveTo(995.9, 321.4, 995.9, 322.4, 997.9, 326.4);
  ctx.bezierCurveTo(993.9, 327.4, 994.9, 323.4, 992.9, 322.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(967.9, 319.4);
  ctx.bezierCurveTo(976.9, 325.4, 974.9, 338.4, 974.9, 347.4);
  ctx.bezierCurveTo(972.9, 339.4, 971.9, 331.4, 970.9, 323.4);
  ctx.bezierCurveTo(974.9, 335.4, 970.9, 349.4, 970.9, 361.4);
  ctx.bezierCurveTo(972.9, 351.4, 972.9, 312.4, 985.9, 318.4);
  ctx.bezierCurveTo(982.9, 319.4, 979.9, 319.4, 975.9, 319.4);
  ctx.bezierCurveTo(978.9, 319.4, 981.9, 320.4, 983.9, 320.4);
  ctx.bezierCurveTo(981.9, 321.4, 978.9, 321.4, 976.9, 321.4);
  ctx.bezierCurveTo(980.9, 319.4, 985.9, 320.4, 989.9, 320.4);
  ctx.bezierCurveTo(989.9, 322.4, 988.9, 327.4, 987.9, 329.4);
  ctx.lineTo(988.9, 326.4);
  ctx.bezierCurveTo(977.9, 337.4, 976.9, 353.4, 974.9, 367.4);
  ctx.bezierCurveTo(971.9, 352.4, 977.9, 337.4, 979.9, 323.4);
  ctx.bezierCurveTo(978.9, 329.4, 978.9, 336.4, 976.9, 342.4);
  ctx.bezierCurveTo(976.9, 336.4, 978.9, 330.4, 980.9, 325.4);
  ctx.bezierCurveTo(979.9, 330.4, 978.9, 336.4, 975.9, 340.4);
  ctx.bezierCurveTo(976.9, 334.4, 978.9, 327.4, 982.9, 322.4);
  ctx.bezierCurveTo(981.9, 326.4, 981.9, 329.4, 980.9, 333.4);
  ctx.bezierCurveTo(980.9, 329.4, 981.9, 326.4, 982.9, 323.4);
  ctx.bezierCurveTo(982.9, 325.4, 982.9, 328.4, 981.9, 331.4);
  ctx.bezierCurveTo(982.9, 327.4, 983.9, 324.4, 984.9, 321.4);
  ctx.bezierCurveTo(984.9, 322.4, 985.9, 326.4, 985.9, 328.4);
  ctx.bezierCurveTo(985.9, 327.4, 986.9, 323.4, 986.9, 324.4);
  ctx.bezierCurveTo(988.9, 322.4, 989.9, 325.4, 990.9, 324.4);
  ctx.bezierCurveTo(981.9, 322.4, 970.9, 379.4, 963.9, 391.4);
  ctx.bezierCurveTo(966.9, 380.4, 971.9, 369.4, 974.9, 358.4);
  ctx.bezierCurveTo(974.9, 366.4, 969.9, 374.4, 967.9, 382.4);
  ctx.bezierCurveTo(968.9, 378.4, 971.9, 373.4, 973.9, 369.4);
  ctx.bezierCurveTo(974.9, 377.4, 970.9, 389.4, 963.9, 393.4);
  ctx.bezierCurveTo(964.9, 389.4, 965.9, 383.4, 968.9, 379.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(985.9, 332.4);
  ctx.bezierCurveTo(986.9, 331.4, 987.9, 330.4, 987.9, 329.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(990.9, 328.4);
  ctx.bezierCurveTo(989.9, 328.4, 989.9, 328.4, 988.9, 328.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(661.9, 352.4);
  ctx.bezierCurveTo(652.9, 351.4, 643.9, 350.4, 634.9, 353.4);
  ctx.bezierCurveTo(643.9, 353.4, 652.9, 353.4, 660.9, 353.4);
  ctx.bezierCurveTo(645.9, 356.4, 631.9, 358.4, 615.9, 361.4);
  ctx.bezierCurveTo(624.9, 359.4, 632.9, 356.4, 641.9, 355.4);
  ctx.bezierCurveTo(639.9, 355.4, 637.9, 356.4, 636.9, 357.4);
  ctx.bezierCurveTo(645.9, 353.4, 655.9, 354.4, 665.9, 354.4);
  ctx.bezierCurveTo(657.9, 350.4, 653.9, 341.4, 656.9, 333.4);
  ctx.bezierCurveTo(657.9, 339.4, 659.9, 346.4, 662.9, 352.4);
  ctx.bezierCurveTo(659.9, 352.4, 663.9, 353.4, 665.9, 353.4);
  ctx.bezierCurveTo(664.9, 346.4, 656.9, 346.4, 650.9, 348.4);
  ctx.bezierCurveTo(651.9, 349.4, 653.9, 349.4, 655.9, 350.4);
  ctx.bezierCurveTo(652.9, 351.4, 652.9, 349.4, 652.9, 348.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(871.9, 388.4);
  ctx.bezierCurveTo(869.9, 389.4, 868.9, 387.4, 868.9, 390.4);
  ctx.bezierCurveTo(871.9, 393.4, 873.9, 397.4, 877.9, 399.4);
  ctx.bezierCurveTo(868.9, 394.4, 859.9, 383.4, 862.9, 372.4);
  ctx.bezierCurveTo(863.9, 376.4, 865.9, 379.4, 866.9, 383.4);
  ctx.bezierCurveTo(865.9, 380.4, 863.9, 377.4, 862.9, 374.4);
  ctx.bezierCurveTo(872.9, 413.4, 949.9, 424.4, 965.9, 383.4);
  ctx.bezierCurveTo(940.9, 406.4, 921.9, 404.4, 890.9, 404.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(882.9, 407.4);
  ctx.bezierCurveTo(904.9, 408.4, 944.9, 409.4, 961.9, 392.4);
  ctx.bezierCurveTo(955.9, 397.4, 945.9, 401.4, 940.9, 401.4);
  ctx.bezierCurveTo(947.9, 399.4, 954.9, 396.4, 960.9, 391.4);
  ctx.bezierCurveTo(945.9, 402.4, 921.9, 405.4, 903.9, 405.4);
  ctx.bezierCurveTo(910.9, 404.4, 918.9, 403.4, 925.9, 403.4);
  ctx.bezierCurveTo(922.9, 404.4, 919.9, 405.4, 916.9, 406.4);
  ctx.bezierCurveTo(922.9, 406.4, 928.9, 405.4, 933.9, 404.4);
  ctx.bezierCurveTo(929.9, 406.4, 925.9, 407.4, 920.9, 408.4);
  ctx.bezierCurveTo(931.9, 406.4, 943.9, 402.4, 953.9, 396.4);
  ctx.bezierCurveTo(948.9, 400.4, 942.9, 404.4, 936.9, 405.4);
  ctx.bezierCurveTo(944.9, 400.4, 953.9, 396.4, 960.9, 391.4);
  ctx.bezierCurveTo(958.9, 414.4, 901.9, 411.4, 885.9, 408.4);
  ctx.bezierCurveTo(899.9, 408.4, 918.9, 405.4, 932.9, 408.4);
  ctx.bezierCurveTo(932.9, 409.4, 931.9, 409.4, 931.9, 409.4);
  ctx.bezierCurveTo(933.9, 409.4, 935.9, 409.4, 936.9, 409.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(929.9, 616.4);
  ctx.bezierCurveTo(928.9, 622.4, 929.9, 628.4, 931.9, 633.4);
  ctx.bezierCurveTo(933.9, 627.4, 933.9, 620.4, 933.9, 613.4);
  ctx.bezierCurveTo(933.9, 616.4, 934.9, 620.4, 934.9, 624.4);
  ctx.bezierCurveTo(935.9, 619.4, 936.9, 615.4, 937.9, 610.4);
  ctx.bezierCurveTo(933.9, 640.4, 940.9, 671.4, 948.9, 699.4);
  ctx.bezierCurveTo(948.9, 676.4, 941.9, 654.4, 934.9, 632.4);
  ctx.bezierCurveTo(930.9, 644.4, 931.9, 659.4, 928.9, 671.4);
  ctx.bezierCurveTo(926.9, 661.4, 925.9, 644.4, 929.9, 634.4);
  ctx.bezierCurveTo(933.9, 655.4, 926.9, 685.4, 918.9, 705.4);
  ctx.bezierCurveTo(919.9, 701.4, 921.9, 698.4, 922.9, 694.4);
  ctx.bezierCurveTo(920.9, 701.4, 920.9, 699.4, 915.9, 702.4);
  ctx.bezierCurveTo(923.9, 696.4, 935.9, 697.4, 946.9, 697.4);
  ctx.bezierCurveTo(939.9, 700.4, 932.9, 701.4, 925.9, 701.4);
  ctx.bezierCurveTo(931.9, 701.4, 937.9, 700.4, 943.9, 699.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(944.9, 705.4);
  ctx.bezierCurveTo(944.9, 704.4, 944.9, 704.4, 944.9, 704.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(616.9, 686.4);
  ctx.bezierCurveTo(614.9, 691.4, 612.9, 697.4, 612.9, 702.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(619.9, 700.4);
  ctx.bezierCurveTo(620.9, 690.4, 620.9, 681.4, 614.9, 674.4);
  ctx.bezierCurveTo(614.9, 673.4, 616.9, 673.4, 616.9, 673.4);
  ctx.bezierCurveTo(624.9, 663.4, 630.9, 654.4, 629.9, 640.4);
  ctx.bezierCurveTo(629.9, 643.4, 629.9, 646.4, 629.9, 649.4);
  ctx.bezierCurveTo(630.9, 645.4, 632.9, 641.4, 633.9, 637.4);
  ctx.bezierCurveTo(637.9, 649.4, 632.9, 666.4, 630.9, 678.4);
  ctx.bezierCurveTo(629.9, 684.4, 629.9, 694.4, 625.9, 699.4);
  ctx.bezierCurveTo(617.9, 707.4, 610.9, 700.4, 618.9, 690.4);
  ctx.bezierCurveTo(618.9, 692.4, 618.9, 694.4, 618.9, 695.4);
  ctx.bezierCurveTo(619.9, 692.4, 622.9, 688.4, 623.9, 685.4);
  ctx.bezierCurveTo(623.9, 690.4, 622.9, 694.4, 620.9, 699.4);
  ctx.bezierCurveTo(622.9, 692.4, 625.9, 685.4, 627.9, 678.4);
  ctx.bezierCurveTo(627.9, 686.4, 623.9, 695.4, 620.9, 703.4);
  ctx.bezierCurveTo(619.9, 703.4, 619.9, 701.4, 619.9, 700.4);
  ctx.bezierCurveTo(618.9, 700.4, 618.9, 701.4, 618.9, 701.4);
  ctx.bezierCurveTo(618.9, 700.4, 616.9, 699.4, 617.9, 700.4);
  ctx.bezierCurveTo(617.9, 700.4, 621.9, 696.4, 623.9, 695.4);
  ctx.bezierCurveTo(623.9, 696.4, 624.9, 697.4, 625.9, 697.4);
  ctx.bezierCurveTo(627.9, 691.4, 626.9, 684.4, 622.9, 679.4);
  ctx.bezierCurveTo(622.9, 680.4, 622.9, 681.4, 622.9, 681.4);
  ctx.bezierCurveTo(619.9, 677.4, 618.9, 676.4, 618.9, 670.4);
  ctx.bezierCurveTo(618.9, 675.4, 618.9, 679.4, 618.9, 684.4);
  ctx.bezierCurveTo(619.9, 679.4, 619.9, 673.4, 619.9, 668.4);
  ctx.bezierCurveTo(619.9, 671.4, 620.9, 674.4, 620.9, 678.4);
  ctx.bezierCurveTo(620.9, 677.4, 620.9, 673.4, 620.9, 673.4);
  ctx.bezierCurveTo(620.9, 676.4, 620.9, 680.4, 620.9, 683.4);
  ctx.bezierCurveTo(620.9, 680.4, 619.9, 677.4, 619.9, 674.4);
  ctx.bezierCurveTo(619.9, 675.4, 619.9, 676.4, 619.9, 677.4);
  ctx.bezierCurveTo(619.9, 675.4, 619.9, 674.4, 619.9, 673.4);
  ctx.bezierCurveTo(619.9, 676.4, 619.9, 679.4, 619.9, 682.4);
  ctx.bezierCurveTo(620.9, 680.4, 620.9, 678.4, 621.9, 676.4);
  ctx.bezierCurveTo(621.9, 678.4, 622.9, 682.4, 622.9, 684.4);
  ctx.bezierCurveTo(622.9, 680.4, 623.9, 676.4, 623.9, 672.4);
  ctx.bezierCurveTo(623.9, 675.4, 623.9, 677.4, 624.9, 679.4);
  ctx.bezierCurveTo(624.9, 677.4, 623.9, 674.4, 623.9, 671.4);
  ctx.bezierCurveTo(623.9, 674.4, 623.9, 678.4, 623.9, 681.4);
  ctx.bezierCurveTo(623.9, 677.4, 622.9, 673.4, 622.9, 669.4);
  ctx.bezierCurveTo(621.9, 672.4, 621.9, 674.4, 621.9, 677.4);
  ctx.bezierCurveTo(624.9, 669.4, 625.9, 659.4, 628.9, 650.4);
  ctx.bezierCurveTo(629.9, 659.4, 626.9, 667.4, 624.9, 676.4);
  ctx.bezierCurveTo(625.9, 667.4, 628.9, 658.4, 629.9, 649.4);
  ctx.bezierCurveTo(629.9, 658.4, 629.9, 667.4, 628.9, 676.4);
  ctx.bezierCurveTo(627.9, 667.4, 631.9, 656.4, 633.9, 646.4);
  ctx.bezierCurveTo(633.9, 656.4, 630.9, 668.4, 625.9, 677.4);
  ctx.bezierCurveTo(626.9, 674.4, 624.9, 670.4, 625.9, 667.4);
  ctx.bezierCurveTo(625.9, 667.4, 618.9, 671.4, 620.9, 670.4);
  ctx.bezierCurveTo(620.9, 675.4, 620.9, 680.4, 620.9, 685.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(643.9, 702.4);
  ctx.bezierCurveTo(655.9, 700.4, 667.9, 701.4, 678.9, 701.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(653.9, 335.4);
  ctx.bezierCurveTo(640.9, 336.4, 628.9, 339.4, 615.9, 339.4);
  ctx.bezierCurveTo(627.9, 339.4, 646.9, 341.4, 653.9, 331.4);
  ctx.bezierCurveTo(657.9, 335.4, 658.9, 331.4, 661.9, 332.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(656.9, 331.4);
  ctx.bezierCurveTo(651.9, 335.4, 650.9, 341.4, 654.9, 346.4);
  ctx.bezierCurveTo(652.9, 344.4, 650.9, 342.4, 649.9, 340.4);
  ctx.bezierCurveTo(650.9, 343.4, 651.9, 346.4, 652.9, 349.4);
  ctx.bezierCurveTo(652.9, 345.4, 649.9, 341.4, 648.9, 338.4);
  ctx.bezierCurveTo(648.9, 341.4, 647.9, 343.4, 647.9, 346.4);
  ctx.bezierCurveTo(647.9, 345.4, 647.9, 341.4, 648.9, 340.4);
  ctx.bezierCurveTo(647.9, 344.4, 648.9, 345.4, 648.9, 349.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(615.9, 358.4);
  ctx.bezierCurveTo(624.9, 352.4, 634.9, 352.4, 644.9, 351.4);
  ctx.bezierCurveTo(637.9, 355.4, 629.9, 358.4, 622.9, 360.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(615.9, 358.4);
  ctx.bezierCurveTo(623.9, 356.4, 659.9, 354.4, 643.9, 339.4);
  ctx.bezierCurveTo(632.9, 329.4, 611.9, 339.4, 614.9, 353.4);
  ctx.bezierCurveTo(615.9, 346.4, 615.9, 338.4, 615.9, 330.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(618.9, 344.4);
  ctx.bezierCurveTo(624.9, 341.4, 633.9, 342.4, 641.9, 340.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(619.9, 343.4);
  ctx.bezierCurveTo(619.9, 350.4, 618.9, 354.4, 617.9, 362.4);
  ctx.bezierCurveTo(616.9, 358.4, 615.9, 350.4, 615.9, 349.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(621.9, 345.4);
  ctx.bezierCurveTo(624.9, 344.4, 627.9, 343.4, 631.9, 343.4);
  ctx.bezierCurveTo(626.9, 343.4, 621.9, 343.4, 616.9, 345.4);
  ctx.bezierCurveTo(621.9, 345.4, 626.9, 345.4, 631.9, 344.4);
  ctx.bezierCurveTo(627.9, 345.4, 622.9, 345.4, 618.9, 346.4);
  ctx.bezierCurveTo(622.9, 346.4, 626.9, 346.4, 631.9, 346.4);
  ctx.bezierCurveTo(630.9, 346.4, 623.9, 347.4, 620.9, 347.4);
  ctx.bezierCurveTo(622.9, 347.4, 625.9, 347.4, 628.9, 347.4);
  ctx.bezierCurveTo(626.9, 348.4, 623.9, 349.4, 621.9, 349.4);
  ctx.bezierCurveTo(624.9, 348.4, 626.9, 348.4, 629.9, 347.4);
  ctx.bezierCurveTo(626.9, 348.4, 622.9, 349.4, 619.9, 350.4);
  ctx.bezierCurveTo(623.9, 350.4, 626.9, 349.4, 630.9, 349.4);
  ctx.bezierCurveTo(626.9, 350.4, 622.9, 351.4, 618.9, 352.4);
  ctx.bezierCurveTo(623.9, 351.4, 627.9, 350.4, 632.9, 349.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(642.9, 349.4);
  ctx.bezierCurveTo(644.9, 347.4, 646.9, 345.4, 647.9, 342.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(622.9, 351.9);
  ctx.bezierCurveTo(626.9, 351.9, 630.9, 350.9, 635.4, 349.9);
  ctx.bezierCurveTo(630.4, 349.9, 625.4, 349.9, 620.9, 350.4);
  ctx.bezierCurveTo(623.4, 349.9, 625.9, 350.4, 628.4, 350.4);
  ctx.bezierCurveTo(622.9, 351.9, 616.9, 352.9, 611.4, 354.9);
  ctx.bezierCurveTo(616.9, 355.4, 623.9, 353.9, 629.4, 351.9);
  ctx.bezierCurveTo(627.9, 351.9, 626.9, 351.9, 625.9, 351.9);
  ctx.lineWidth = line_width;
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(621.4, 353.9);
  ctx.bezierCurveTo(624.4, 352.9, 627.4, 351.9, 630.4, 350.9);
  ctx.bezierCurveTo(625.4, 350.9, 620.9, 350.9, 616.4, 352.9);
  ctx.bezierCurveTo(620.4, 354.9, 626.9, 354.9, 631.4, 353.9);
  ctx.bezierCurveTo(627.4, 354.4, 623.9, 354.9, 620.4, 355.9);
  ctx.bezierCurveTo(626.4, 356.9, 632.9, 356.4, 638.9, 354.9);
  ctx.bezierCurveTo(633.4, 354.4, 627.4, 355.4, 622.4, 356.9);
  ctx.bezierCurveTo(626.4, 355.4, 630.9, 354.4, 634.9, 353.4);
  ctx.bezierCurveTo(629.9, 353.4, 621.4, 352.4, 617.9, 355.9);
  ctx.bezierCurveTo(619.4, 356.9, 620.4, 358.4, 621.4, 358.9);
  ctx.bezierCurveTo(621.4, 359.4, 619.9, 359.9, 619.9, 359.9);
  ctx.bezierCurveTo(619.4, 355.9, 623.4, 354.4, 623.9, 350.9);
  ctx.bezierCurveTo(623.9, 347.9, 619.9, 344.4, 620.4, 341.4);
  ctx.bezierCurveTo(621.4, 340.9, 622.9, 340.4, 624.4, 340.4);
  ctx.bezierCurveTo(623.4, 340.4, 621.9, 340.4, 620.9, 340.9);
  ctx.bezierCurveTo(622.9, 340.9, 624.9, 340.9, 626.9, 340.9);
  ctx.bezierCurveTo(625.4, 341.4, 623.9, 341.4, 622.4, 341.9);
  ctx.bezierCurveTo(625.9, 340.9, 628.9, 339.9, 632.4, 338.9);
  ctx.bezierCurveTo(630.9, 338.9, 629.4, 338.4, 627.9, 338.9);
  ctx.bezierCurveTo(629.9, 337.9, 631.4, 336.9, 633.4, 335.9);
  ctx.bezierCurveTo(630.9, 335.9, 628.9, 335.9, 626.9, 336.9);
  ctx.bezierCurveTo(627.9, 336.4, 628.9, 336.4, 629.9, 335.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(647.9, 335.9);
  ctx.bezierCurveTo(648.9, 341.9, 649.9, 349.9, 644.4, 353.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(642.9, 354.9);
  ctx.bezierCurveTo(648.9, 353.4, 654.9, 352.9, 660.9, 352.9);
  ctx.bezierCurveTo(656.4, 352.9, 650.9, 352.4, 646.4, 351.9);
  ctx.bezierCurveTo(649.4, 350.4, 653.4, 349.9, 655.9, 348.9);
  ctx.bezierCurveTo(656.9, 349.9, 657.4, 350.9, 657.4, 351.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(669.9, 347.4);
  ctx.bezierCurveTo(670.9, 347.9, 671.9, 348.4, 672.4, 349.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(666.9, 354.4);
  ctx.bezierCurveTo(669.9, 354.9, 671.9, 356.9, 672.9, 359.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(668.4, 355.9);
  ctx.bezierCurveTo(669.9, 357.4, 670.4, 358.9, 671.4, 360.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(683.9, 372.4);
  ctx.bezierCurveTo(685.4, 378.4, 686.4, 383.9, 687.4, 389.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(774.4, 415.9);
  ctx.bezierCurveTo(769.9, 416.9, 765.9, 417.9, 761.9, 419.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(757.4, 421.9);
  ctx.bezierCurveTo(761.4, 422.4, 765.9, 421.4, 769.9, 420.4);
  ctx.bezierCurveTo(768.9, 419.9, 767.4, 419.9, 766.4, 419.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(762.4, 420.9);
  ctx.bezierCurveTo(766.9, 420.4, 770.4, 418.4, 774.4, 417.4);
  ctx.bezierCurveTo(763.4, 419.4, 752.9, 426.4, 741.9, 427.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(876.4, 403.4);
  ctx.bezierCurveTo(878.9, 403.9, 881.9, 404.4, 884.4, 404.9);
  ctx.bezierCurveTo(880.4, 405.9, 876.9, 404.4, 873.9, 402.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(918.9, 326.4);
  ctx.bezierCurveTo(922.9, 327.9, 927.4, 328.4, 930.9, 330.9);
  ctx.bezierCurveTo(926.9, 329.4, 923.4, 327.4, 918.9, 325.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(915.4, 317.4);
  ctx.bezierCurveTo(916.9, 315.9, 917.9, 314.4, 920.9, 314.4);
  ctx.bezierCurveTo(918.4, 314.4, 916.9, 314.9, 914.4, 315.9);
  ctx.bezierCurveTo(917.4, 315.9, 920.9, 315.4, 923.9, 315.4);
  ctx.bezierCurveTo(920.4, 315.9, 916.9, 316.4, 913.4, 317.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(698.4, 338.9);
  ctx.bezierCurveTo(701.9, 337.9, 704.9, 336.9, 708.4, 336.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(870.9, 321.9);
  ctx.bezierCurveTo(869.4, 323.9, 867.9, 325.9, 866.9, 327.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(812.4, 538.9);
  ctx.bezierCurveTo(812.4, 541.4, 812.4, 543.9, 813.4, 546.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(787.4, 548.4);
  ctx.bezierCurveTo(794.9, 545.4, 802.4, 542.9, 809.4, 539.9);
  ctx.bezierCurveTo(816.4, 550.4, 798.4, 547.4, 791.9, 547.4);
  ctx.bezierCurveTo(796.9, 545.4, 802.9, 545.4, 807.9, 545.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(807.9, 542.4);
  ctx.bezierCurveTo(807.9, 543.4, 807.9, 544.4, 807.9, 544.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(806.9, 543.4);
  ctx.bezierCurveTo(804.4, 543.9, 802.4, 543.9, 800.4, 544.9);
  ctx.bezierCurveTo(803.4, 543.9, 806.9, 542.9, 809.4, 540.4);
  ctx.bezierCurveTo(810.4, 541.9, 810.9, 544.9, 810.9, 546.4);
  ctx.bezierCurveTo(805.4, 546.9, 799.4, 545.9, 793.4, 545.9);
  ctx.bezierCurveTo(798.4, 544.4, 802.9, 541.9, 808.4, 540.9);
  ctx.lineWidth = line_width;
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(814.4, 537.9);
  ctx.bezierCurveTo(813.9, 540.9, 814.9, 543.9, 815.9, 546.4);
  ctx.bezierCurveTo(814.9, 546.4, 813.9, 546.4, 812.4, 546.4);
  ctx.bezierCurveTo(822.9, 545.4, 834.9, 544.9, 846.4, 543.9);
  ctx.bezierCurveTo(858.4, 542.9, 868.9, 536.9, 880.4, 532.9);
  ctx.bezierCurveTo(868.9, 532.4, 856.4, 534.9, 845.4, 535.9);
  ctx.bezierCurveTo(835.9, 536.4, 824.9, 535.4, 815.9, 537.9);
  ctx.bezierCurveTo(831.4, 538.4, 846.9, 535.9, 862.4, 534.4);
  ctx.bezierCurveTo(849.9, 536.9, 836.9, 539.9, 824.9, 543.9);
  ctx.bezierCurveTo(830.4, 543.9, 836.9, 542.4, 842.4, 540.9);
  ctx.bezierCurveTo(835.9, 539.9, 828.9, 539.9, 822.4, 540.9);
  ctx.bezierCurveTo(829.4, 541.9, 836.9, 540.9, 843.9, 540.4);
  ctx.bezierCurveTo(834.4, 539.4, 824.4, 539.9, 815.4, 541.9);
  ctx.bezierCurveTo(818.4, 541.9, 821.4, 541.9, 824.4, 541.4);
  ctx.bezierCurveTo(823.9, 541.9, 821.9, 542.4, 821.4, 542.4);
  ctx.bezierCurveTo(821.9, 542.9, 822.4, 542.9, 822.9, 542.9);
  ctx.bezierCurveTo(819.4, 543.4, 815.9, 543.4, 812.4, 543.9);
  ctx.bezierCurveTo(814.9, 542.9, 817.4, 541.9, 819.9, 540.4);
  ctx.bezierCurveTo(818.4, 540.4, 816.9, 539.9, 814.9, 539.9);
  ctx.bezierCurveTo(828.9, 536.9, 842.4, 535.4, 856.4, 533.9);
  ctx.bezierCurveTo(848.9, 536.4, 841.4, 538.4, 833.4, 538.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(839.9, 539.9);
  ctx.bezierCurveTo(849.9, 538.4, 859.9, 535.4, 869.9, 534.4);
  ctx.bezierCurveTo(863.4, 539.4, 851.4, 542.4, 843.4, 541.9);
  ctx.bezierCurveTo(848.9, 539.4, 854.9, 537.4, 860.9, 536.9);
  ctx.bezierCurveTo(856.9, 537.4, 852.9, 537.9, 849.4, 539.4);
  ctx.bezierCurveTo(856.9, 539.9, 878.4, 537.9, 883.9, 531.4);
  ctx.bezierCurveTo(879.4, 532.9, 875.4, 535.9, 870.4, 537.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(773.9, 310.4);
  ctx.bezierCurveTo(779.9, 310.4, 784.9, 309.9, 790.4, 311.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(764.9, 308.4);
  ctx.bezierCurveTo(769.4, 308.4, 773.9, 307.4, 778.4, 307.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(790.9, 307.4);
  ctx.bezierCurveTo(792.4, 307.9, 793.9, 308.9, 795.4, 309.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(853.4, 309.9);
  ctx.bezierCurveTo(855.4, 308.4, 857.4, 306.9, 859.4, 306.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(866.9, 305.9);
  ctx.bezierCurveTo(867.9, 305.4, 869.4, 305.4, 870.9, 305.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(911.9, 639.4);
  ctx.bezierCurveTo(918.9, 636.4, 923.9, 632.4, 928.9, 626.4);
  ctx.lineWidth = line_width;
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(632.9, 626.4);
  ctx.bezierCurveTo(632.9, 631.4, 632.9, 635.4, 631.9, 639.4);
  ctx.bezierCurveTo(631.9, 634.4, 633.9, 631.4, 635.9, 627.4);
  ctx.bezierCurveTo(635.9, 630.4, 636.9, 634.4, 636.9, 637.4);
  ctx.bezierCurveTo(636.9, 634.4, 636.9, 631.4, 636.9, 628.4);
  ctx.bezierCurveTo(635.9, 632.4, 634.9, 635.4, 634.9, 638.4);
  ctx.bezierCurveTo(634.9, 635.4, 634.9, 632.4, 635.9, 629.4);
  ctx.bezierCurveTo(636.9, 629.4, 634.9, 633.4, 635.9, 633.4);
  ctx.bezierCurveTo(636.9, 631.4, 636.9, 629.4, 637.9, 626.4);
  ctx.bezierCurveTo(635.9, 630.4, 633.9, 633.4, 631.9, 636.4);
  ctx.bezierCurveTo(632.9, 633.4, 632.9, 631.4, 634.9, 628.4);
  ctx.bezierCurveTo(631.9, 631.4, 628.9, 634.4, 626.9, 637.4);
  ctx.bezierCurveTo(627.9, 633.4, 629.9, 629.4, 631.9, 625.4);
  ctx.bezierCurveTo(631.9, 629.4, 631.9, 632.4, 629.9, 636.4);
  ctx.bezierCurveTo(629.9, 632.4, 631.9, 629.4, 633.9, 625.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(643.9, 560.4);
  ctx.bezierCurveTo(643.9, 581.4, 642.9, 603.4, 645.9, 623.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(901.9, 545.4);
  ctx.bezierCurveTo(899.9, 548.4, 896.9, 551.4, 894.9, 554.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(817.9, 572.4);
  ctx.bezierCurveTo(807.9, 567.4, 798.9, 565.4, 791.9, 556.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(891.9, 530.4);
  ctx.bezierCurveTo(897.9, 531.4, 902.9, 533.4, 907.9, 535.4);
  ctx.bezierCurveTo(903.9, 534.4, 900.9, 533.4, 897.9, 531.4);
  ctx.bezierCurveTo(903.9, 532.4, 904.9, 532.4, 909.9, 535.4);
  ctx.bezierCurveTo(902.9, 533.4, 895.9, 533.4, 887.9, 533.4);
  ctx.bezierCurveTo(891.9, 532.4, 895.9, 532.4, 898.9, 532.4);
  ctx.bezierCurveTo(894.9, 533.4, 890.9, 534.4, 885.9, 535.4);
  ctx.bezierCurveTo(887.9, 535.4, 889.9, 535.4, 891.9, 534.4);
  ctx.bezierCurveTo(888.9, 534.4, 885.9, 535.4, 881.9, 535.4);
  ctx.bezierCurveTo(882.9, 534.4, 883.9, 534.4, 883.9, 533.4);
  ctx.bezierCurveTo(883.9, 533.4, 882.9, 533.4, 882.9, 534.4);
  ctx.bezierCurveTo(889.9, 533.4, 897.9, 532.4, 904.9, 534.4);
  ctx.bezierCurveTo(903.9, 534.4, 902.9, 533.4, 901.9, 533.4);
  ctx.bezierCurveTo(903.9, 533.4, 905.9, 534.4, 906.9, 534.4);
  ctx.bezierCurveTo(899.9, 529.4, 890.9, 529.4, 882.9, 532.4);
  ctx.bezierCurveTo(887.9, 530.4, 892.9, 530.4, 896.9, 530.4);
  ctx.bezierCurveTo(886.9, 536.4, 872.9, 538.4, 860.9, 542.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(615.4, 515.4);
  ctx.bezierCurveTo(608.4, 515.9, 603.4, 512.4, 596.9, 509.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(610.9, 512.9);
  ctx.bezierCurveTo(602.4, 514.4, 592.9, 511.9, 586.9, 505.9);
  ctx.bezierCurveTo(590.4, 505.9, 593.9, 507.9, 597.4, 509.4);
  ctx.bezierCurveTo(593.4, 505.9, 587.4, 502.4, 581.9, 501.9);
  ctx.bezierCurveTo(583.9, 502.9, 585.4, 504.4, 587.9, 505.4);
  ctx.bezierCurveTo(585.4, 504.4, 582.9, 503.4, 580.4, 501.9);
  ctx.bezierCurveTo(585.9, 503.4, 591.4, 505.9, 596.4, 507.4);
  ctx.bezierCurveTo(595.9, 503.9, 593.4, 501.4, 590.4, 499.4);
  ctx.bezierCurveTo(592.9, 500.4, 595.4, 502.4, 597.4, 503.9);
  ctx.bezierCurveTo(594.4, 503.9, 591.9, 502.9, 589.4, 501.4);
  ctx.bezierCurveTo(591.4, 501.9, 592.9, 502.4, 594.4, 502.9);
  ctx.bezierCurveTo(591.4, 503.4, 587.4, 502.4, 584.9, 502.4);
  ctx.bezierCurveTo(587.9, 503.9, 591.4, 504.9, 594.4, 505.4);
  ctx.bezierCurveTo(596.9, 495.4, 589.4, 488.9, 582.4, 482.4);
  ctx.bezierCurveTo(586.4, 487.4, 590.9, 495.4, 595.9, 498.9);
  ctx.bezierCurveTo(595.4, 496.4, 593.9, 493.9, 592.4, 491.4);
  ctx.bezierCurveTo(593.9, 496.4, 599.4, 501.4, 603.9, 504.4);
  ctx.bezierCurveTo(601.9, 499.9, 598.9, 495.9, 596.4, 491.9);
  ctx.bezierCurveTo(598.9, 497.4, 602.9, 502.4, 606.9, 506.9);
  ctx.bezierCurveTo(602.9, 502.9, 598.9, 498.9, 594.9, 495.4);
  ctx.bezierCurveTo(593.9, 500.9, 600.4, 505.9, 604.4, 509.9);
  ctx.bezierCurveTo(602.4, 507.9, 599.9, 505.9, 597.9, 503.9);
  ctx.bezierCurveTo(601.9, 507.4, 606.9, 509.9, 609.4, 513.9);
  ctx.bezierCurveTo(603.4, 513.4, 597.9, 509.4, 591.9, 511.4);
  ctx.bezierCurveTo(597.4, 516.4, 607.4, 517.4, 614.9, 517.4);
  ctx.bezierCurveTo(611.9, 514.9, 608.4, 512.9, 605.4, 510.4);
  ctx.bezierCurveTo(607.9, 512.4, 610.9, 513.9, 613.4, 515.4);
  ctx.bezierCurveTo(608.9, 512.4, 603.9, 509.4, 598.4, 507.4);
  ctx.bezierCurveTo(600.9, 509.4, 603.4, 511.9, 605.9, 513.9);
  ctx.bezierCurveTo(601.9, 511.4, 596.9, 509.9, 592.9, 507.4);
  ctx.bezierCurveTo(597.4, 509.9, 602.9, 513.9, 607.9, 514.4);
  ctx.bezierCurveTo(606.9, 510.9, 604.9, 507.9, 603.4, 504.9);
  ctx.bezierCurveTo(607.9, 507.9, 611.9, 511.4, 616.9, 513.4);
  ctx.bezierCurveTo(615.9, 508.4, 612.9, 503.4, 609.9, 499.4);
  ctx.bezierCurveTo(611.4, 500.9, 612.9, 502.4, 614.4, 503.9);
  ctx.bezierCurveTo(609.4, 500.4, 604.4, 495.9, 599.4, 491.9);
  ctx.bezierCurveTo(601.9, 497.9, 606.9, 501.9, 610.9, 506.9);
  ctx.bezierCurveTo(606.9, 503.4, 602.9, 499.4, 598.9, 495.4);
  ctx.bezierCurveTo(605.9, 501.9, 612.9, 508.9, 617.9, 516.9);
  ctx.bezierCurveTo(616.9, 513.9, 614.4, 511.4, 612.4, 508.9);
  ctx.bezierCurveTo(615.9, 509.9, 618.9, 512.9, 622.4, 514.9);
  ctx.bezierCurveTo(619.9, 509.4, 614.9, 505.9, 611.4, 501.4);
  ctx.bezierCurveTo(615.9, 505.9, 619.4, 511.4, 622.9, 516.9);
  ctx.bezierCurveTo(619.4, 511.9, 615.4, 506.4, 611.9, 501.4);
  ctx.bezierCurveTo(617.9, 504.9, 621.4, 509.9, 625.9, 514.9);
  ctx.bezierCurveTo(624.4, 509.9, 620.4, 504.9, 616.4, 501.9);
  ctx.bezierCurveTo(618.4, 506.4, 622.9, 510.4, 626.4, 513.9);
  ctx.bezierCurveTo(625.9, 508.9, 620.4, 503.4, 617.4, 498.9);
  ctx.bezierCurveTo(622.4, 503.4, 624.9, 510.4, 628.9, 515.9);
  ctx.bezierCurveTo(627.9, 511.9, 626.4, 508.4, 624.9, 504.9);
  ctx.bezierCurveTo(625.9, 505.9, 627.4, 506.9, 628.4, 508.4);
  ctx.bezierCurveTo(626.9, 506.4, 625.4, 504.4, 623.9, 502.4);
  ctx.bezierCurveTo(625.4, 504.4, 627.9, 506.4, 629.9, 507.4);
  ctx.bezierCurveTo(629.4, 506.4, 628.4, 505.4, 627.9, 504.4);
  ctx.bezierCurveTo(629.4, 506.9, 630.4, 509.9, 631.9, 512.4);
  ctx.bezierCurveTo(631.4, 509.4, 630.4, 506.9, 628.4, 504.4);
  ctx.bezierCurveTo(629.4, 505.4, 629.9, 505.9, 630.9, 506.9);
  ctx.bezierCurveTo(630.4, 505.9, 630.4, 504.4, 629.9, 503.4);
  ctx.bezierCurveTo(631.4, 506.4, 631.9, 509.9, 632.9, 512.9);
  ctx.bezierCurveTo(632.9, 509.4, 631.9, 506.4, 630.4, 503.4);
  ctx.bezierCurveTo(634.9, 513.9, 638.4, 525.4, 641.9, 536.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(622.9, 516.4);
  ctx.bezierCurveTo(627.4, 519.9, 630.4, 524.4, 634.4, 528.4);
  ctx.bezierCurveTo(629.9, 522.4, 624.4, 515.9, 616.9, 512.9);
  ctx.bezierCurveTo(617.4, 515.4, 619.4, 517.9, 621.9, 519.4);
  ctx.bezierCurveTo(619.4, 516.9, 616.4, 514.9, 614.4, 512.4);
  ctx.bezierCurveTo(618.9, 515.9, 624.4, 518.9, 629.4, 521.4);
  ctx.bezierCurveTo(628.4, 517.9, 626.4, 514.9, 624.4, 511.9);
  ctx.bezierCurveTo(629.4, 517.9, 632.9, 524.4, 638.4, 529.4);
  ctx.bezierCurveTo(637.9, 523.9, 634.9, 517.9, 631.9, 513.4);
  ctx.bezierCurveTo(633.9, 519.9, 636.4, 526.4, 638.4, 532.9);
  ctx.bezierCurveTo(635.4, 528.9, 631.4, 525.9, 627.4, 523.4);
  ctx.bezierCurveTo(628.9, 527.9, 632.4, 532.4, 635.9, 535.9);
  ctx.bezierCurveTo(635.9, 535.4, 635.9, 534.4, 635.9, 533.4);
  ctx.bezierCurveTo(637.9, 537.4, 638.4, 541.9, 639.9, 546.4);
  ctx.bezierCurveTo(638.9, 541.9, 637.4, 537.4, 637.4, 533.4);
  ctx.bezierCurveTo(639.9, 536.4, 641.4, 540.4, 642.4, 543.9);
  ctx.bezierCurveTo(642.9, 541.4, 643.4, 539.4, 643.4, 536.9);
  ctx.bezierCurveTo(642.4, 540.9, 641.4, 544.9, 640.9, 548.9);
  ctx.bezierCurveTo(638.4, 542.9, 637.4, 536.4, 634.9, 530.4);
  ctx.bezierCurveTo(638.4, 531.9, 640.4, 534.9, 641.9, 537.9);
  ctx.bezierCurveTo(641.4, 535.9, 640.4, 534.4, 639.4, 532.9);
  ctx.bezierCurveTo(641.9, 538.4, 641.4, 543.9, 642.4, 549.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(629.9, 511.9);
  ctx.bezierCurveTo(629.9, 515.9, 630.4, 519.9, 630.9, 523.9);
  ctx.bezierCurveTo(628.4, 517.9, 625.4, 510.4, 625.4, 503.9);
  ctx.bezierCurveTo(630.4, 507.4, 633.4, 517.4, 632.9, 523.4);
  ctx.bezierCurveTo(629.4, 520.4, 625.4, 516.4, 624.4, 511.9);
  ctx.bezierCurveTo(627.9, 514.4, 631.4, 518.9, 632.9, 522.9);
  ctx.bezierCurveTo(625.9, 522.9, 617.9, 517.4, 611.4, 513.9);
  ctx.bezierCurveTo(611.9, 514.4, 612.4, 514.4, 612.9, 514.4);
  ctx.bezierCurveTo(608.4, 514.9, 603.4, 514.9, 598.4, 514.9);
  ctx.bezierCurveTo(599.9, 515.4, 601.4, 515.9, 602.9, 516.4);
  ctx.bezierCurveTo(599.9, 515.4, 596.9, 514.4, 594.4, 512.9);
  ctx.bezierCurveTo(600.4, 514.9, 608.4, 518.4, 614.4, 516.4);
  ctx.bezierCurveTo(610.9, 511.4, 599.9, 512.9, 593.9, 509.4);
  ctx.bezierCurveTo(590.4, 507.4, 587.9, 504.9, 585.9, 501.9);
  ctx.bezierCurveTo(585.9, 500.9, 586.9, 500.9, 587.4, 499.9);
  ctx.bezierCurveTo(584.4, 498.9, 583.4, 499.9, 581.4, 500.9);
  ctx.bezierCurveTo(582.4, 501.4, 583.9, 502.4, 585.4, 502.4);
  ctx.bezierCurveTo(583.9, 502.9, 582.4, 502.9, 581.4, 502.4);
  ctx.bezierCurveTo(584.4, 501.9, 587.9, 501.4, 590.9, 500.9);
  ctx.lineTo(590.4, 500.4);
  ctx.bezierCurveTo(587.4, 500.4, 584.9, 500.4, 581.9, 500.9);
  ctx.bezierCurveTo(587.4, 500.9, 592.9, 501.4, 598.4, 502.4);
  ctx.bezierCurveTo(596.9, 497.9, 592.9, 494.4, 592.9, 490.4);
  ctx.bezierCurveTo(593.9, 491.4, 594.9, 492.4, 596.4, 493.4);
  ctx.bezierCurveTo(594.4, 491.9, 592.4, 490.9, 590.9, 489.4);
  ctx.bezierCurveTo(593.9, 495.4, 599.4, 500.4, 603.4, 505.9);
  ctx.bezierCurveTo(599.9, 504.4, 596.9, 501.9, 593.9, 499.9);
  ctx.bezierCurveTo(595.9, 501.9, 597.9, 503.4, 599.9, 505.4);
  ctx.bezierCurveTo(595.9, 503.9, 592.9, 501.4, 589.9, 498.4);
  ctx.bezierCurveTo(593.4, 502.9, 595.9, 509.4, 600.4, 512.4);
  ctx.bezierCurveTo(600.4, 509.4, 599.4, 506.4, 599.4, 503.4);
  ctx.bezierCurveTo(604.9, 503.9, 609.9, 506.9, 614.4, 509.9);
  ctx.bezierCurveTo(612.4, 508.9, 609.9, 508.4, 607.9, 507.9);
  ctx.bezierCurveTo(610.4, 508.9, 612.4, 510.4, 614.4, 511.4);
  ctx.bezierCurveTo(612.4, 510.9, 609.9, 510.4, 607.9, 509.4);
  ctx.bezierCurveTo(609.9, 511.9, 612.4, 512.9, 615.4, 513.4);
  ctx.bezierCurveTo(611.4, 511.9, 607.9, 508.9, 605.9, 505.4);
  ctx.bezierCurveTo(607.4, 505.9, 609.9, 505.4, 611.4, 505.9);
  ctx.bezierCurveTo(610.9, 504.4, 611.4, 503.4, 610.4, 501.9);
  ctx.bezierCurveTo(611.9, 502.9, 612.9, 503.4, 613.9, 504.4);
  ctx.bezierCurveTo(611.4, 501.9, 608.9, 499.4, 606.4, 497.4);
  ctx.bezierCurveTo(607.9, 500.9, 610.9, 503.9, 613.9, 505.9);
  ctx.bezierCurveTo(611.9, 504.4, 610.9, 502.4, 608.9, 500.9);
  ctx.bezierCurveTo(612.4, 501.9, 615.9, 502.9, 618.9, 504.4);
  ctx.bezierCurveTo(617.4, 503.4, 615.9, 501.9, 614.4, 500.9);
  ctx.bezierCurveTo(619.4, 501.9, 623.9, 501.4, 629.4, 503.4);
  ctx.bezierCurveTo(628.9, 502.9, 628.4, 502.4, 627.9, 502.4);
  ctx.bezierCurveTo(628.4, 503.4, 629.9, 504.9, 630.9, 506.9);
  ctx.bezierCurveTo(630.9, 505.9, 630.9, 505.4, 630.9, 504.4);
  ctx.bezierCurveTo(634.9, 508.9, 634.9, 516.9, 636.4, 522.4);
  ctx.bezierCurveTo(637.9, 529.9, 641.9, 537.9, 641.9, 544.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(640.9, 550.4);
  ctx.bezierCurveTo(635.9, 546.9, 628.9, 533.9, 629.9, 525.9);
  ctx.bezierCurveTo(631.4, 526.9, 631.9, 528.4, 632.4, 529.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(627.9, 527.4);
  ctx.bezierCurveTo(630.4, 528.4, 631.9, 530.4, 633.9, 532.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(632.9, 528.4);
  ctx.bezierCurveTo(634.9, 535.9, 640.4, 542.9, 641.9, 550.4);
  ctx.bezierCurveTo(647.4, 538.9, 642.4, 511.4, 633.4, 502.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(529.9, 386.9);
  ctx.bezierCurveTo(529.4, 382.4, 528.9, 377.9, 527.9, 373.4);
  ctx.bezierCurveTo(530.9, 375.9, 533.9, 380.4, 533.4, 384.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(531.9, 384.9);
  ctx.bezierCurveTo(529.9, 387.9, 527.9, 391.4, 525.4, 393.9);
  ctx.bezierCurveTo(526.9, 391.4, 528.4, 389.4, 530.4, 387.9);
  ctx.bezierCurveTo(521.9, 396.9, 520.9, 405.9, 525.9, 416.9);
  ctx.bezierCurveTo(531.4, 428.4, 543.4, 432.9, 554.9, 436.9);
  ctx.bezierCurveTo(544.4, 429.4, 532.9, 427.9, 525.4, 416.4);
  ctx.bezierCurveTo(534.4, 423.9, 540.9, 433.4, 550.9, 438.9);
  ctx.bezierCurveTo(544.4, 431.9, 535.9, 426.4, 528.4, 420.4);
  ctx.bezierCurveTo(519.4, 412.9, 519.9, 407.9, 516.4, 397.9);
  ctx.bezierCurveTo(521.4, 406.4, 526.4, 417.9, 533.4, 424.9);
  ctx.bezierCurveTo(538.9, 429.9, 549.9, 431.4, 553.4, 436.9);
  ctx.bezierCurveTo(552.4, 436.9, 550.9, 437.4, 549.4, 437.4);
  ctx.bezierCurveTo(550.9, 438.4, 552.9, 439.4, 554.4, 440.4);
  ctx.bezierCurveTo(547.9, 436.4, 540.4, 433.9, 535.4, 428.4);
  ctx.bezierCurveTo(531.4, 424.9, 528.9, 419.4, 525.4, 415.4);
  ctx.bezierCurveTo(525.4, 419.4, 529.4, 423.4, 532.4, 426.4);
  ctx.bezierCurveTo(527.9, 422.9, 522.9, 418.9, 520.4, 413.4);
  ctx.bezierCurveTo(524.4, 417.9, 527.9, 423.4, 532.9, 427.4);
  ctx.bezierCurveTo(537.4, 430.4, 543.4, 431.4, 547.9, 434.9);
  ctx.bezierCurveTo(529.9, 434.9, 519.9, 413.4, 515.9, 399.4);
  ctx.bezierCurveTo(514.9, 402.4, 515.4, 405.9, 517.4, 408.4);
  ctx.bezierCurveTo(517.9, 403.4, 514.4, 396.9, 512.4, 392.4);
  ctx.bezierCurveTo(507.4, 393.4, 498.4, 396.4, 498.9, 402.4);
  ctx.bezierCurveTo(502.9, 398.9, 506.9, 395.4, 512.4, 394.9);
  ctx.bezierCurveTo(510.4, 395.4, 507.9, 396.4, 505.9, 396.9);
  ctx.bezierCurveTo(510.9, 394.4, 516.4, 392.4, 521.4, 389.9);
  ctx.bezierCurveTo(517.4, 390.9, 513.9, 392.4, 510.4, 393.9);
  ctx.bezierCurveTo(511.4, 393.4, 512.4, 392.9, 513.4, 392.4);
  ctx.bezierCurveTo(509.9, 393.4, 506.4, 394.4, 502.9, 395.9);
  ctx.bezierCurveTo(504.4, 395.4, 505.9, 394.9, 506.9, 394.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(517.9, 400.9);
  ctx.bezierCurveTo(519.9, 396.4, 518.4, 391.4, 521.9, 387.4);
  ctx.bezierCurveTo(522.9, 392.4, 521.9, 397.4, 521.9, 401.9);
  ctx.bezierCurveTo(521.4, 396.4, 523.9, 390.9, 528.4, 387.4);
  ctx.bezierCurveTo(522.9, 391.4, 517.9, 394.9, 516.9, 401.9);
  ctx.bezierCurveTo(517.9, 396.4, 518.4, 390.9, 519.9, 385.9);
  ctx.bezierCurveTo(518.4, 390.4, 514.9, 393.9, 513.9, 398.9);
  ctx.bezierCurveTo(513.9, 394.9, 513.9, 390.9, 513.4, 386.9);
  ctx.bezierCurveTo(509.9, 389.9, 506.9, 393.9, 503.9, 397.9);
  ctx.bezierCurveTo(508.9, 392.4, 514.9, 386.9, 520.4, 382.4);
  ctx.bezierCurveTo(515.4, 384.4, 510.9, 386.9, 505.9, 389.4);
  ctx.bezierCurveTo(513.4, 387.9, 520.4, 383.4, 527.9, 383.4);
  ctx.bezierCurveTo(526.9, 384.9, 525.9, 387.4, 524.4, 388.4);
  ctx.bezierCurveTo(525.4, 388.4, 526.4, 388.4, 527.4, 387.9);
  ctx.bezierCurveTo(526.4, 389.4, 525.4, 389.4, 523.9, 389.9);
  ctx.bezierCurveTo(523.9, 388.9, 523.9, 387.4, 523.9, 386.4);
  ctx.bezierCurveTo(521.9, 386.9, 518.9, 386.4, 516.9, 386.9);
  ctx.bezierCurveTo(518.4, 385.4, 519.9, 383.9, 521.9, 382.9);
  ctx.bezierCurveTo(518.4, 385.4, 515.4, 387.4, 512.4, 389.9);
  ctx.bezierCurveTo(514.9, 388.9, 517.9, 388.9, 519.9, 387.9);
  ctx.bezierCurveTo(518.9, 389.4, 518.9, 391.4, 517.9, 392.4);
  ctx.bezierCurveTo(518.4, 392.9, 519.9, 393.9, 520.4, 394.4);
  ctx.bezierCurveTo(523.4, 390.4, 527.4, 386.4, 524.4, 381.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(526.4, 391.4);
  ctx.bezierCurveTo(522.9, 401.4, 528.9, 418.4, 536.9, 424.4);
  ctx.bezierCurveTo(533.4, 415.4, 527.9, 406.9, 526.4, 397.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(529.9, 391.9);
  ctx.bezierCurveTo(530.4, 402.4, 533.4, 415.9, 540.9, 423.9);
  ctx.bezierCurveTo(538.9, 413.4, 530.9, 404.4, 527.4, 393.9);
  ctx.bezierCurveTo(536.4, 405.4, 537.9, 418.9, 542.9, 431.4);
  ctx.bezierCurveTo(539.9, 426.4, 536.4, 421.4, 533.4, 416.4);
  ctx.bezierCurveTo(536.9, 423.4, 544.9, 430.4, 551.4, 434.4);
  ctx.bezierCurveTo(549.4, 426.4, 541.4, 420.4, 537.9, 411.9);
  ctx.bezierCurveTo(534.9, 404.4, 532.4, 396.4, 532.4, 388.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(512.4, 381.9);
  ctx.bezierCurveTo(501.9, 380.4, 492.9, 378.9, 482.4, 378.9);
  ctx.bezierCurveTo(493.4, 379.9, 504.9, 383.4, 514.9, 387.9);
  ctx.bezierCurveTo(501.9, 380.4, 487.9, 380.4, 473.9, 377.9);
  ctx.bezierCurveTo(488.4, 375.9, 504.4, 374.9, 518.4, 380.4);
  ctx.bezierCurveTo(504.4, 375.9, 488.4, 375.9, 473.4, 375.4);
  ctx.bezierCurveTo(485.9, 374.4, 510.9, 368.9, 521.4, 378.4);
  ctx.bezierCurveTo(512.4, 377.4, 503.4, 375.4, 494.4, 375.9);
  ctx.bezierCurveTo(502.9, 377.9, 511.9, 378.4, 519.9, 381.9);
  ctx.bezierCurveTo(508.4, 377.4, 495.9, 375.9, 483.9, 373.4);
  ctx.bezierCurveTo(495.4, 376.4, 507.9, 376.9, 518.9, 379.9);
  ctx.bezierCurveTo(509.4, 379.4, 500.4, 377.9, 490.9, 377.4);
  ctx.bezierCurveTo(504.4, 378.9, 518.9, 378.9, 531.4, 382.4);
  ctx.bezierCurveTo(527.4, 383.4, 523.4, 382.9, 519.4, 383.4);
  ctx.bezierCurveTo(519.9, 383.9, 520.4, 384.4, 520.9, 385.4);
  ctx.bezierCurveTo(513.9, 383.9, 507.4, 382.4, 500.9, 380.9);
  ctx.bezierCurveTo(504.4, 381.4, 507.9, 381.9, 511.9, 382.9);
  ctx.bezierCurveTo(509.9, 382.9, 508.4, 381.9, 506.9, 381.4);
  ctx.bezierCurveTo(511.4, 380.9, 515.9, 380.9, 520.4, 380.9);
  ctx.bezierCurveTo(513.9, 379.4, 507.4, 379.4, 500.9, 379.4);
  ctx.bezierCurveTo(508.4, 381.4, 515.9, 381.9, 522.9, 383.9);
  ctx.bezierCurveTo(522.9, 384.4, 522.9, 384.9, 522.4, 384.9);
  ctx.bezierCurveTo(522.9, 384.9, 524.4, 384.9, 524.9, 384.9);
  ctx.bezierCurveTo(523.9, 383.4, 523.4, 381.9, 521.9, 379.9);
  ctx.bezierCurveTo(524.4, 385.4, 525.4, 391.4, 526.9, 397.4);
  ctx.bezierCurveTo(523.9, 394.9, 520.9, 392.4, 517.9, 390.9);
  ctx.bezierCurveTo(516.9, 394.9, 518.9, 399.9, 520.4, 403.9);
  ctx.bezierCurveTo(517.9, 398.4, 514.9, 393.4, 513.4, 387.4);
  ctx.bezierCurveTo(518.9, 391.4, 524.4, 398.4, 527.4, 403.9);
  ctx.bezierCurveTo(523.9, 402.4, 520.4, 399.9, 517.4, 397.9);
  ctx.bezierCurveTo(518.9, 399.4, 519.4, 401.9, 520.4, 403.4);
  ctx.bezierCurveTo(515.9, 400.4, 507.4, 391.4, 504.9, 394.4);
  ctx.bezierCurveTo(510.9, 393.4, 514.4, 389.9, 518.9, 393.9);
  ctx.bezierCurveTo(522.9, 397.9, 522.4, 405.9, 527.4, 409.9);
  ctx.bezierCurveTo(531.9, 413.9, 540.9, 415.9, 541.4, 421.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(530.4, 384.4);
  ctx.bezierCurveTo(524.9, 378.4, 513.4, 378.9, 505.9, 376.9);
  ctx.bezierCurveTo(512.9, 376.9, 521.9, 377.4, 528.4, 380.9);
  ctx.bezierCurveTo(523.4, 376.4, 515.4, 373.9, 508.9, 372.9);
  ctx.bezierCurveTo(509.4, 373.4, 510.9, 375.9, 511.4, 376.9);
  ctx.bezierCurveTo(507.4, 375.4, 503.4, 373.4, 499.9, 371.9);
  ctx.bezierCurveTo(502.4, 372.9, 505.9, 373.4, 508.9, 374.4);
  ctx.bezierCurveTo(505.4, 374.9, 502.4, 374.4, 498.9, 374.4);
  ctx.bezierCurveTo(500.9, 374.4, 502.9, 374.4, 504.9, 374.4);
  ctx.bezierCurveTo(503.4, 373.9, 501.4, 373.9, 499.4, 373.9);
  ctx.bezierCurveTo(505.9, 377.9, 518.4, 376.9, 526.4, 378.4);
  ctx.bezierCurveTo(526.4, 376.4, 526.9, 373.9, 525.9, 371.9);
  ctx.bezierCurveTo(525.9, 373.4, 525.9, 374.9, 526.4, 376.4);
  ctx.bezierCurveTo(526.9, 373.9, 527.4, 370.9, 527.9, 368.4);
  ctx.bezierCurveTo(528.4, 371.4, 528.4, 373.9, 528.4, 376.9);
  ctx.bezierCurveTo(528.4, 373.4, 529.4, 369.9, 531.4, 367.4);
  ctx.bezierCurveTo(531.9, 372.9, 530.4, 377.9, 532.4, 383.4);
  ctx.bezierCurveTo(533.4, 375.9, 532.9, 367.4, 533.4, 359.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(511.4, 337.9);
  ctx.bezierCurveTo(503.9, 335.9, 497.9, 333.9, 491.4, 329.9);
  ctx.bezierCurveTo(486.9, 326.4, 483.4, 321.9, 477.9, 322.4);
  ctx.bezierCurveTo(481.4, 333.9, 490.4, 340.9, 501.9, 343.9);
  ctx.bezierCurveTo(499.4, 337.9, 492.4, 322.4, 484.9, 322.9);
  ctx.bezierCurveTo(485.9, 327.9, 490.4, 331.9, 493.9, 334.9);
  ctx.bezierCurveTo(489.9, 330.9, 485.4, 327.4, 480.9, 323.4);
  ctx.bezierCurveTo(486.9, 331.9, 496.4, 342.4, 506.9, 345.9);
  ctx.bezierCurveTo(498.9, 345.4, 497.9, 350.4, 492.4, 354.4);
  ctx.bezierCurveTo(496.9, 358.9, 502.9, 361.9, 505.4, 368.9);
  ctx.bezierCurveTo(506.4, 365.9, 507.4, 362.4, 508.4, 359.4);
  ctx.bezierCurveTo(509.4, 363.4, 508.9, 367.9, 508.9, 371.9);
  ctx.bezierCurveTo(508.4, 362.9, 505.4, 353.4, 510.4, 345.4);
  ctx.bezierCurveTo(509.4, 354.4, 508.4, 363.4, 506.9, 372.4);
  ctx.bezierCurveTo(504.4, 367.9, 501.9, 363.4, 499.9, 358.4);
  ctx.bezierCurveTo(501.4, 361.9, 503.9, 364.4, 506.4, 366.4);
  ctx.bezierCurveTo(505.4, 360.4, 502.4, 354.4, 500.9, 348.4);
  ctx.bezierCurveTo(502.4, 350.9, 503.9, 353.4, 504.9, 355.9);
  ctx.bezierCurveTo(502.9, 353.9, 500.4, 352.4, 497.9, 351.4);
  ctx.bezierCurveTo(499.4, 352.4, 500.9, 353.9, 501.9, 354.9);
  ctx.bezierCurveTo(500.4, 353.4, 498.4, 351.9, 496.9, 350.9);
  ctx.bezierCurveTo(496.9, 353.4, 497.9, 356.4, 499.4, 358.4);
  ctx.bezierCurveTo(502.4, 354.4, 503.4, 348.9, 505.9, 343.9);
  ctx.bezierCurveTo(506.9, 346.4, 507.9, 348.9, 507.9, 351.9);
  ctx.bezierCurveTo(504.9, 347.9, 501.4, 343.9, 500.4, 339.4);
  ctx.bezierCurveTo(504.4, 340.9, 506.9, 345.4, 510.4, 347.4);
  ctx.bezierCurveTo(511.4, 344.4, 510.9, 341.4, 510.9, 338.4);
  ctx.bezierCurveTo(511.9, 340.9, 511.9, 343.9, 512.4, 346.9);
  ctx.bezierCurveTo(512.4, 343.9, 512.4, 340.9, 513.4, 338.4);
  ctx.bezierCurveTo(512.9, 348.9, 508.9, 358.9, 509.4, 369.4);
  ctx.bezierCurveTo(508.4, 360.4, 505.9, 348.9, 508.4, 339.9);
  ctx.bezierCurveTo(509.4, 340.4, 510.4, 340.9, 511.4, 341.9);
  ctx.bezierCurveTo(507.9, 339.9, 504.4, 337.4, 501.4, 335.4);
  ctx.bezierCurveTo(502.9, 336.9, 504.4, 339.4, 506.4, 340.4);
  ctx.bezierCurveTo(501.9, 340.4, 496.9, 338.9, 492.9, 336.4);
  ctx.bezierCurveTo(493.9, 336.4, 494.9, 336.9, 495.9, 336.9);
  ctx.bezierCurveTo(491.9, 333.9, 488.4, 331.4, 485.4, 327.4);
  ctx.bezierCurveTo(488.9, 330.4, 492.4, 332.9, 495.4, 336.4);
  ctx.bezierCurveTo(490.9, 333.4, 486.9, 329.9, 482.4, 326.9);
  ctx.bezierCurveTo(486.4, 333.4, 498.9, 338.9, 506.9, 339.4);
  ctx.bezierCurveTo(506.9, 338.9, 506.9, 337.4, 506.4, 336.4);
  ctx.bezierCurveTo(510.4, 336.9, 514.4, 337.4, 517.9, 338.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(502.4, 352.9);
  ctx.bezierCurveTo(510.9, 360.4, 514.4, 376.4, 523.4, 381.9);
  ctx.bezierCurveTo(522.4, 372.4, 513.9, 363.4, 507.9, 356.4);
  ctx.bezierCurveTo(511.4, 361.9, 514.4, 368.4, 517.4, 374.4);
  ctx.bezierCurveTo(512.9, 370.9, 510.4, 365.9, 506.9, 361.9);
  ctx.bezierCurveTo(508.4, 367.9, 512.4, 374.4, 516.4, 379.4);
  ctx.bezierCurveTo(512.4, 375.4, 507.9, 370.9, 505.9, 365.4);
  ctx.bezierCurveTo(511.9, 369.4, 516.9, 374.9, 523.9, 376.4);
  ctx.bezierCurveTo(527.9, 367.4, 519.4, 350.4, 515.9, 341.9);
  ctx.bezierCurveTo(520.9, 349.9, 526.4, 358.9, 529.9, 368.4);
  ctx.bezierCurveTo(522.9, 358.9, 516.9, 348.4, 511.9, 337.9);
  ctx.bezierCurveTo(519.9, 345.9, 524.9, 358.9, 526.4, 369.9);
  ctx.bezierCurveTo(518.4, 364.4, 511.9, 356.9, 505.9, 349.9);
  ctx.bezierCurveTo(509.9, 357.4, 513.9, 364.9, 518.9, 371.9);
  ctx.bezierCurveTo(515.4, 362.9, 508.9, 354.9, 505.9, 345.9);
  ctx.bezierCurveTo(508.9, 349.4, 511.9, 352.9, 514.4, 356.9);
  ctx.bezierCurveTo(511.4, 353.4, 508.9, 349.9, 507.4, 345.4);
  ctx.bezierCurveTo(512.9, 351.9, 517.4, 359.4, 521.4, 367.4);
  ctx.bezierCurveTo(516.4, 359.9, 511.4, 352.4, 508.4, 343.9);
  ctx.bezierCurveTo(511.9, 348.4, 515.4, 352.9, 518.9, 356.9);
  ctx.bezierCurveTo(516.9, 353.4, 514.9, 349.4, 513.9, 345.4);
  ctx.bezierCurveTo(517.9, 349.9, 520.9, 355.9, 521.4, 361.4);
  ctx.bezierCurveTo(516.9, 357.9, 513.4, 353.4, 509.9, 348.9);
  ctx.bezierCurveTo(514.9, 357.4, 519.4, 365.4, 522.9, 374.4);
  ctx.bezierCurveTo(520.4, 367.4, 516.9, 360.9, 512.9, 354.4);
  ctx.bezierCurveTo(516.4, 361.4, 522.4, 366.9, 525.4, 373.9);
  ctx.bezierCurveTo(518.9, 367.4, 513.4, 359.4, 509.9, 350.9);
  ctx.bezierCurveTo(518.4, 355.4, 526.9, 362.4, 536.9, 363.9);
  ctx.bezierCurveTo(536.9, 358.4, 529.9, 350.4, 527.4, 344.9);
  ctx.bezierCurveTo(527.9, 347.9, 528.9, 350.4, 528.9, 353.4);
  ctx.bezierCurveTo(523.4, 351.4, 518.4, 344.9, 515.9, 339.9);
  ctx.bezierCurveTo(521.9, 343.9, 525.9, 349.4, 530.9, 354.4);
  ctx.bezierCurveTo(526.4, 347.4, 520.9, 341.4, 516.9, 334.4);
  ctx.bezierCurveTo(524.4, 340.4, 522.9, 353.9, 530.4, 360.9);
  ctx.bezierCurveTo(529.4, 357.9, 526.9, 355.4, 525.4, 352.9);
  ctx.bezierCurveTo(528.9, 354.4, 531.9, 357.9, 531.9, 362.4);
  ctx.bezierCurveTo(531.9, 362.4, 529.9, 364.4, 530.4, 364.4);
  ctx.bezierCurveTo(528.9, 359.4, 525.9, 354.9, 525.4, 349.9);
  ctx.bezierCurveTo(528.9, 351.9, 532.9, 355.4, 535.4, 357.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(505.9, 315.4);
  ctx.bezierCurveTo(503.4, 312.4, 501.9, 309.4, 501.9, 305.9);
  ctx.bezierCurveTo(501.4, 308.4, 501.4, 310.4, 502.4, 312.9);
  ctx.bezierCurveTo(498.4, 309.9, 495.4, 300.9, 499.4, 296.4);
  ctx.bezierCurveTo(501.4, 303.9, 502.4, 311.9, 505.9, 318.4);
  ctx.bezierCurveTo(505.4, 309.4, 502.4, 297.4, 504.4, 288.9);
  ctx.bezierCurveTo(506.9, 293.4, 508.4, 298.4, 510.9, 302.9);
  ctx.bezierCurveTo(505.9, 293.9, 502.9, 284.9, 501.4, 274.9);
  ctx.bezierCurveTo(502.4, 277.4, 502.9, 279.9, 503.4, 282.4);
  ctx.bezierCurveTo(502.4, 279.4, 501.9, 276.4, 501.4, 273.4);
  ctx.bezierCurveTo(501.4, 275.4, 500.9, 277.9, 500.4, 279.4);
  ctx.bezierCurveTo(498.9, 269.4, 502.9, 257.9, 508.9, 249.9);
  ctx.bezierCurveTo(505.9, 256.9, 500.9, 262.4, 497.9, 268.9);
  ctx.bezierCurveTo(496.9, 265.9, 497.4, 261.9, 499.4, 259.4);
  ctx.bezierCurveTo(500.9, 265.4, 497.4, 271.9, 497.4, 278.4);
  ctx.bezierCurveTo(497.4, 282.9, 498.9, 287.9, 498.9, 292.4);
  ctx.bezierCurveTo(498.9, 289.9, 499.4, 287.9, 499.4, 285.9);
  ctx.bezierCurveTo(506.4, 292.9, 507.9, 307.9, 511.4, 317.4);
  ctx.bezierCurveTo(510.4, 313.9, 508.9, 310.9, 507.9, 307.4);
  ctx.bezierCurveTo(509.4, 309.9, 511.4, 312.4, 513.4, 314.4);
  ctx.bezierCurveTo(511.9, 312.9, 510.9, 311.4, 509.4, 309.4);
  ctx.bezierCurveTo(514.9, 317.9, 521.4, 324.9, 522.9, 334.4);
  ctx.bezierCurveTo(521.4, 332.4, 519.4, 330.4, 517.4, 328.9);
  ctx.bezierCurveTo(517.4, 332.9, 519.4, 336.9, 520.4, 340.9);
  ctx.bezierCurveTo(518.9, 338.9, 518.4, 336.4, 517.4, 333.9);
  ctx.bezierCurveTo(520.4, 335.9, 522.9, 338.9, 524.4, 342.4);
  ctx.bezierCurveTo(523.9, 339.4, 522.9, 336.4, 521.9, 333.9);
  ctx.bezierCurveTo(524.9, 337.9, 526.9, 342.4, 528.9, 346.4);
  ctx.bezierCurveTo(527.9, 342.4, 525.9, 338.9, 523.9, 335.4);
  ctx.bezierCurveTo(528.4, 340.4, 531.4, 346.9, 534.4, 352.9);
  ctx.bezierCurveTo(533.4, 348.9, 532.4, 344.9, 530.9, 341.4);
  ctx.bezierCurveTo(533.9, 346.4, 536.4, 351.9, 539.4, 357.4);
  ctx.bezierCurveTo(537.4, 353.4, 534.9, 349.4, 533.9, 345.4);
  ctx.bezierCurveTo(537.4, 348.4, 539.9, 352.4, 542.9, 355.9);
  ctx.bezierCurveTo(537.4, 346.4, 530.9, 338.4, 525.4, 329.4);
  ctx.bezierCurveTo(530.4, 336.9, 535.9, 344.4, 540.4, 352.4);
  ctx.bezierCurveTo(534.4, 341.4, 524.9, 331.4, 516.9, 321.4);
  ctx.bezierCurveTo(518.4, 322.9, 519.9, 324.9, 521.4, 326.9);
  ctx.bezierCurveTo(514.9, 322.9, 508.4, 316.9, 503.9, 310.4);
  ctx.bezierCurveTo(505.9, 314.9, 510.9, 314.9, 513.9, 318.4);
  ctx.bezierCurveTo(514.4, 313.9, 512.4, 309.9, 513.4, 305.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(544.4, 359.9);
  ctx.bezierCurveTo(537.4, 353.4, 536.4, 337.9, 533.4, 329.4);
  ctx.bezierCurveTo(527.9, 311.9, 518.4, 295.9, 513.9, 277.9);
  ctx.bezierCurveTo(511.4, 267.4, 509.9, 253.4, 513.4, 242.4);
  ctx.bezierCurveTo(512.9, 257.4, 509.9, 268.4, 513.4, 283.9);
  ctx.bezierCurveTo(518.4, 306.9, 520.4, 324.9, 535.4, 342.9);
  ctx.bezierCurveTo(536.9, 331.4, 530.4, 317.9, 525.4, 307.4);
  ctx.bezierCurveTo(526.9, 316.4, 529.9, 325.9, 531.4, 334.9);
  ctx.bezierCurveTo(531.9, 322.9, 523.4, 305.9, 518.9, 294.4);
  ctx.bezierCurveTo(517.9, 303.9, 521.9, 312.4, 524.9, 321.4);
  ctx.bezierCurveTo(515.9, 300.4, 510.4, 277.4, 506.4, 254.9);
  ctx.bezierCurveTo(499.9, 270.4, 507.9, 306.4, 516.9, 319.4);
  ctx.bezierCurveTo(516.4, 301.9, 510.4, 284.4, 508.9, 266.4);
  ctx.bezierCurveTo(518.4, 283.9, 522.4, 303.4, 529.4, 321.4);
  ctx.bezierCurveTo(533.9, 332.9, 540.4, 346.9, 539.4, 359.9);
  ctx.bezierCurveTo(538.9, 358.9, 536.9, 355.9, 537.9, 357.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(508.4, 295.9);
  ctx.bezierCurveTo(509.4, 297.4, 509.4, 298.4, 510.9, 298.4);
  ctx.bezierCurveTo(511.9, 286.9, 509.9, 274.9, 509.9, 263.4);
  ctx.bezierCurveTo(511.9, 281.9, 508.9, 301.4, 507.9, 319.4);
  ctx.bezierCurveTo(504.9, 304.4, 501.9, 277.4, 509.4, 263.4);
  ctx.bezierCurveTo(513.9, 269.9, 514.9, 282.4, 513.9, 290.4);
  ctx.bezierCurveTo(508.4, 281.4, 507.4, 269.4, 505.9, 258.9);
  ctx.bezierCurveTo(505.9, 259.4, 505.9, 260.4, 505.9, 261.4);
  ctx.bezierCurveTo(505.4, 258.9, 505.9, 256.9, 506.4, 254.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(584.4, 190.9);
  ctx.bezierCurveTo(582.9, 211.4, 554.4, 224.4, 539.4, 234.4);
  ctx.bezierCurveTo(553.4, 221.4, 576.9, 215.4, 585.4, 196.9);
  ctx.bezierCurveTo(568.9, 204.4, 556.9, 218.9, 540.4, 226.9);
  ctx.bezierCurveTo(532.9, 230.4, 523.9, 231.4, 517.9, 237.9);
  ctx.bezierCurveTo(540.9, 237.9, 567.9, 216.4, 581.9, 198.4);
  ctx.bezierCurveTo(579.9, 201.4, 577.9, 203.9, 574.9, 204.9);
  ctx.bezierCurveTo(575.9, 198.4, 581.9, 192.4, 585.4, 187.4);
  ctx.bezierCurveTo(577.4, 204.4, 562.4, 226.9, 546.4, 237.4);
  ctx.bezierCurveTo(539.9, 242.4, 531.4, 243.4, 523.9, 245.4);
  ctx.bezierCurveTo(539.4, 234.4, 558.9, 221.9, 576.4, 214.9);
  ctx.bezierCurveTo(564.9, 231.4, 535.9, 237.4, 518.4, 246.4);
  ctx.bezierCurveTo(524.4, 244.4, 529.9, 241.4, 534.4, 237.4);
  ctx.bezierCurveTo(525.4, 239.9, 515.4, 242.9, 506.9, 246.9);
  ctx.bezierCurveTo(512.4, 247.4, 517.9, 245.9, 523.9, 245.9);
  ctx.bezierCurveTo(520.9, 249.4, 517.4, 249.9, 517.4, 254.4);
  ctx.bezierCurveTo(517.4, 259.4, 523.9, 269.9, 526.4, 273.4);
  ctx.bezierCurveTo(528.4, 262.9, 526.9, 251.4, 524.4, 240.9);
  ctx.bezierCurveTo(525.9, 258.9, 527.9, 279.4, 533.9, 296.4);
  ctx.bezierCurveTo(533.4, 278.9, 519.9, 260.9, 516.9, 243.4);
  ctx.bezierCurveTo(531.4, 255.9, 532.9, 282.9, 539.4, 299.9);
  ctx.bezierCurveTo(535.4, 283.9, 528.4, 268.9, 521.9, 253.4);
  ctx.bezierCurveTo(527.9, 269.9, 532.9, 286.4, 537.9, 302.9);
  ctx.bezierCurveTo(526.9, 286.4, 519.9, 270.4, 513.4, 252.4);
  ctx.bezierCurveTo(515.4, 268.9, 525.9, 283.9, 531.9, 299.4);
  ctx.bezierCurveTo(527.9, 283.9, 519.9, 269.4, 516.9, 252.9);
  ctx.bezierCurveTo(518.4, 269.4, 506.4, 310.9, 526.9, 318.9);
  ctx.bezierCurveTo(530.9, 304.9, 521.4, 287.4, 518.9, 273.4);
  ctx.bezierCurveTo(527.9, 284.4, 530.9, 301.4, 536.9, 314.4);
  ctx.bezierCurveTo(533.4, 303.4, 530.4, 291.9, 526.4, 281.4);
  ctx.bezierCurveTo(528.9, 297.9, 534.4, 313.9, 537.9, 329.9);
  ctx.bezierCurveTo(535.4, 313.4, 529.4, 297.4, 526.4, 280.9);
  ctx.bezierCurveTo(533.4, 298.9, 540.4, 318.9, 549.9, 335.9);
  ctx.bezierCurveTo(548.4, 314.9, 531.9, 295.9, 531.9, 274.9);
  ctx.bezierCurveTo(540.9, 285.4, 546.4, 299.9, 549.9, 312.9);
  ctx.bezierCurveTo(539.4, 299.4, 530.4, 279.9, 528.4, 262.4);
  ctx.bezierCurveTo(534.4, 270.9, 541.4, 282.9, 542.4, 293.4);
  ctx.bezierCurveTo(532.9, 283.4, 529.9, 272.4, 525.9, 259.4);
  ctx.bezierCurveTo(529.9, 285.4, 534.4, 316.4, 544.9, 340.9);
  ctx.bezierCurveTo(546.9, 345.4, 550.4, 349.4, 551.9, 353.9);
  ctx.bezierCurveTo(541.9, 346.9, 533.4, 331.9, 529.4, 319.9);
  ctx.bezierCurveTo(535.4, 331.4, 541.9, 350.4, 551.9, 358.9);
  ctx.bezierCurveTo(550.9, 355.4, 548.9, 352.4, 545.9, 350.9);
  ctx.bezierCurveTo(546.4, 352.9, 545.9, 354.9, 546.9, 356.9);
  ctx.bezierCurveTo(546.4, 356.9, 541.9, 356.9, 544.4, 357.4);
  ctx.bezierCurveTo(542.9, 349.9, 539.9, 340.9, 535.4, 334.9);
  ctx.bezierCurveTo(538.9, 347.9, 553.4, 355.9, 562.9, 364.4);
  ctx.bezierCurveTo(558.4, 358.9, 551.9, 354.9, 547.9, 348.9);
  ctx.bezierCurveTo(558.9, 358.4, 568.4, 370.9, 580.4, 378.9);
  ctx.bezierCurveTo(589.4, 384.9, 600.4, 389.9, 610.4, 394.4);
  ctx.bezierCurveTo(601.9, 390.4, 595.4, 383.9, 587.9, 378.9);
  ctx.bezierCurveTo(583.4, 375.4, 577.9, 372.4, 574.4, 368.4);
  ctx.bezierCurveTo(571.4, 364.9, 568.9, 359.4, 566.4, 358.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(559.4, 367.9);
  ctx.bezierCurveTo(563.4, 370.9, 567.4, 374.9, 571.4, 377.4);
  ctx.bezierCurveTo(568.9, 373.9, 560.9, 368.9, 556.4, 367.9);
  ctx.bezierCurveTo(557.9, 369.9, 559.4, 369.9, 561.4, 370.4);
  ctx.bezierCurveTo(563.9, 357.4, 550.9, 362.9, 544.9, 357.9);
  ctx.bezierCurveTo(550.9, 357.9, 556.4, 366.9, 560.4, 370.9);
  ctx.bezierCurveTo(559.9, 369.9, 559.9, 367.9, 559.4, 366.9);
  ctx.bezierCurveTo(564.9, 369.9, 569.9, 374.4, 574.9, 377.9);
  ctx.bezierCurveTo(572.9, 374.9, 570.4, 371.9, 567.9, 369.9);
  ctx.bezierCurveTo(572.4, 376.4, 581.4, 382.9, 587.9, 386.4);
  ctx.bezierCurveTo(586.4, 382.4, 583.4, 379.4, 580.9, 375.9);
  ctx.bezierCurveTo(585.9, 380.4, 590.9, 384.4, 595.4, 388.9);
  ctx.bezierCurveTo(593.4, 387.4, 591.4, 385.4, 589.4, 383.9);
  ctx.bezierCurveTo(594.9, 388.4, 600.9, 392.9, 605.4, 398.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(584.9, 385.9);
  ctx.bezierCurveTo(589.9, 386.4, 593.4, 388.9, 596.4, 392.4);
  ctx.bezierCurveTo(594.9, 389.9, 592.9, 387.9, 590.4, 386.4);
  ctx.bezierCurveTo(594.4, 391.4, 598.9, 395.4, 602.9, 399.9);
  ctx.bezierCurveTo(602.9, 398.4, 602.9, 395.9, 602.4, 393.9);
  ctx.bezierCurveTo(606.4, 398.9, 609.4, 404.9, 612.9, 409.9);
  ctx.bezierCurveTo(611.9, 405.9, 609.9, 401.9, 608.4, 397.9);
  ctx.bezierCurveTo(610.9, 404.4, 614.4, 410.4, 616.9, 416.9);
  ctx.bezierCurveTo(617.4, 417.9, 616.4, 415.9, 615.9, 415.9);
  ctx.bezierCurveTo(616.9, 424.9, 619.9, 435.4, 622.9, 443.9);
  ctx.bezierCurveTo(623.4, 440.4, 623.4, 436.9, 622.9, 433.4);
  ctx.bezierCurveTo(623.4, 433.9, 623.9, 434.4, 623.9, 435.4);
  ctx.bezierCurveTo(622.4, 423.9, 620.4, 410.4, 615.9, 399.4);
  ctx.bezierCurveTo(616.9, 403.9, 618.4, 407.9, 619.4, 411.9);
  ctx.bezierCurveTo(617.9, 408.9, 616.9, 405.9, 614.9, 402.9);
  ctx.bezierCurveTo(616.9, 409.4, 620.4, 414.9, 622.4, 421.4);
  ctx.bezierCurveTo(619.9, 412.9, 617.9, 401.4, 611.9, 394.4);
  ctx.bezierCurveTo(612.9, 405.4, 616.4, 419.9, 620.4, 430.9);
  ctx.bezierCurveTo(620.9, 428.4, 620.9, 426.4, 620.9, 423.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(619.9, 397.4);
  ctx.bezierCurveTo(619.9, 402.4, 620.9, 406.9, 621.4, 411.4);
  ctx.bezierCurveTo(620.4, 410.4, 618.4, 409.4, 617.4, 407.9);
  ctx.bezierCurveTo(618.9, 409.9, 621.4, 411.9, 622.9, 412.9);
  ctx.bezierCurveTo(620.4, 405.9, 611.9, 399.9, 611.4, 391.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(611.4, 396.9);
  ctx.bezierCurveTo(611.4, 386.4, 611.9, 375.9, 615.9, 366.4);
  ctx.bezierCurveTo(616.4, 369.4, 616.9, 372.9, 617.4, 375.9);
  ctx.bezierCurveTo(617.4, 374.4, 616.9, 372.4, 616.9, 370.9);
  ctx.bezierCurveTo(616.4, 378.9, 610.4, 385.4, 608.4, 392.9);
  ctx.bezierCurveTo(608.9, 387.4, 610.4, 380.9, 612.9, 375.4);
  ctx.bezierCurveTo(613.4, 378.4, 613.4, 381.4, 613.4, 383.9);
  ctx.bezierCurveTo(613.4, 380.9, 613.4, 377.9, 613.4, 374.4);
  ctx.bezierCurveTo(613.9, 376.9, 613.9, 379.4, 613.9, 381.9);
  ctx.bezierCurveTo(613.9, 377.4, 613.4, 372.9, 613.4, 368.4);
  ctx.bezierCurveTo(613.9, 369.4, 613.9, 370.4, 614.4, 371.4);
  ctx.bezierCurveTo(613.9, 364.4, 609.9, 357.4, 608.4, 349.9);
  ctx.bezierCurveTo(608.4, 351.9, 608.9, 353.9, 609.4, 355.9);
  ctx.bezierCurveTo(610.4, 345.9, 607.4, 334.9, 604.9, 324.9);
  ctx.bezierCurveTo(605.9, 329.4, 606.9, 333.9, 608.4, 337.9);
  ctx.bezierCurveTo(607.4, 335.4, 606.9, 332.9, 605.9, 330.9);
  ctx.bezierCurveTo(607.4, 336.9, 609.4, 343.4, 609.9, 349.9);
  ctx.bezierCurveTo(608.4, 347.9, 606.9, 346.4, 606.4, 343.4);
  ctx.bezierCurveTo(608.4, 347.4, 609.9, 351.4, 611.4, 355.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(543.9, 320.4);
  ctx.bezierCurveTo(547.9, 337.9, 563.4, 362.9, 581.4, 369.9);
  ctx.bezierCurveTo(575.9, 360.9, 567.9, 353.4, 561.9, 344.4);
  ctx.bezierCurveTo(556.4, 335.4, 551.9, 326.4, 546.9, 316.9);
  ctx.bezierCurveTo(543.9, 310.4, 540.9, 304.4, 538.4, 297.9);
  ctx.bezierCurveTo(545.4, 322.9, 550.4, 357.9, 571.9, 374.9);
  ctx.bezierCurveTo(569.9, 364.9, 554.9, 353.9, 548.4, 346.4);
  ctx.bezierCurveTo(541.4, 337.9, 533.9, 328.9, 530.9, 318.4);
  ctx.bezierCurveTo(545.9, 334.9, 556.9, 356.4, 574.4, 370.9);
  ctx.bezierCurveTo(563.4, 352.4, 548.9, 336.4, 537.9, 317.9);
  ctx.bezierCurveTo(544.9, 328.9, 550.9, 340.4, 557.9, 351.4);
  ctx.bezierCurveTo(561.4, 357.4, 570.9, 377.4, 578.4, 378.4);
  ctx.bezierCurveTo(576.4, 364.4, 558.9, 351.9, 550.4, 341.4);
  ctx.bezierCurveTo(560.9, 355.4, 571.4, 371.4, 583.4, 383.4);
  ctx.bezierCurveTo(580.9, 365.4, 558.4, 352.9, 551.9, 335.9);
  ctx.bezierCurveTo(560.9, 342.4, 567.9, 351.4, 577.4, 357.9);
  ctx.bezierCurveTo(562.4, 338.9, 542.4, 321.9, 534.4, 298.4);
  ctx.bezierCurveTo(545.4, 312.9, 550.4, 342.4, 565.9, 352.4);
  ctx.bezierCurveTo(564.4, 336.4, 549.4, 319.9, 542.4, 305.9);
  ctx.bezierCurveTo(536.9, 294.4, 530.4, 281.4, 529.9, 268.4);
  ctx.bezierCurveTo(536.9, 277.4, 540.9, 295.4, 544.4, 306.4);
  ctx.bezierCurveTo(542.4, 302.4, 540.4, 298.9, 537.9, 294.9);
  ctx.bezierCurveTo(537.4, 299.9, 538.4, 304.9, 537.9, 309.4);
  ctx.bezierCurveTo(528.4, 300.9, 521.9, 283.9, 516.9, 271.9);
  ctx.bezierCurveTo(523.4, 287.9, 523.9, 306.4, 531.9, 321.9);
  ctx.bezierCurveTo(528.4, 301.9, 516.9, 283.4, 509.9, 264.4);
  ctx.bezierCurveTo(515.9, 282.9, 517.9, 302.9, 520.9, 322.4);
  ctx.bezierCurveTo(512.9, 310.9, 504.9, 293.4, 504.9, 279.4);
  ctx.bezierCurveTo(510.4, 286.9, 512.4, 296.9, 515.4, 305.4);
  ctx.bezierCurveTo(511.4, 290.4, 506.9, 272.4, 517.9, 259.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(582.9, 185.4);
  ctx.bezierCurveTo(581.9, 176.9, 585.9, 167.4, 587.9, 159.4);
  ctx.bezierCurveTo(588.9, 164.9, 588.4, 170.9, 588.4, 176.4);
  ctx.bezierCurveTo(588.9, 167.4, 591.9, 158.9, 592.9, 149.9);
  ctx.bezierCurveTo(592.9, 151.4, 593.4, 152.9, 593.4, 154.4);
  ctx.bezierCurveTo(592.9, 151.9, 591.9, 149.4, 591.4, 146.9);
  ctx.bezierCurveTo(584.9, 159.9, 592.9, 177.9, 586.9, 191.9);
  ctx.bezierCurveTo(588.9, 181.4, 593.4, 171.4, 596.4, 160.9);
  ctx.bezierCurveTo(596.9, 165.9, 596.4, 170.9, 595.9, 175.4);
  ctx.bezierCurveTo(595.9, 167.9, 595.4, 159.9, 593.4, 152.4);
  ctx.bezierCurveTo(592.9, 157.9, 593.9, 163.4, 593.9, 168.4);
  ctx.bezierCurveTo(592.4, 164.4, 590.9, 160.4, 589.9, 155.9);
  ctx.bezierCurveTo(595.4, 166.9, 600.9, 178.4, 602.4, 190.9);
  ctx.bezierCurveTo(601.4, 184.9, 599.9, 178.4, 599.9, 172.4);
  ctx.bezierCurveTo(602.9, 176.4, 603.4, 181.4, 603.9, 185.9);
  ctx.bezierCurveTo(603.9, 183.4, 603.4, 180.9, 603.4, 178.4);
  ctx.bezierCurveTo(604.9, 184.9, 604.9, 191.9, 604.9, 198.9);
  ctx.bezierCurveTo(597.4, 225.4, 591.4, 248.9, 572.4, 270.9);
  ctx.bezierCurveTo(579.4, 254.9, 593.9, 240.9, 601.9, 225.4);
  ctx.bezierCurveTo(607.9, 213.4, 611.4, 201.4, 615.4, 189.4);
  ctx.bezierCurveTo(603.9, 211.4, 588.9, 232.4, 573.4, 251.9);
  ctx.bezierCurveTo(565.9, 261.4, 555.4, 264.9, 544.9, 270.9);
  ctx.bezierCurveTo(560.9, 259.4, 581.9, 251.4, 589.4, 231.9);
  ctx.bezierCurveTo(592.4, 223.9, 593.9, 215.9, 595.9, 207.4);
  ctx.bezierCurveTo(581.9, 236.4, 556.4, 258.9, 535.4, 283.4);
  ctx.bezierCurveTo(552.4, 271.4, 569.4, 259.4, 583.9, 244.9);
  ctx.bezierCurveTo(589.9, 239.4, 599.9, 225.9, 604.9, 222.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(601.4, 208.9);
  ctx.bezierCurveTo(586.9, 228.4, 567.9, 249.4, 548.4, 263.9);
  ctx.bezierCurveTo(564.9, 238.9, 582.4, 212.4, 602.4, 189.9);
  ctx.bezierCurveTo(593.4, 203.4, 581.4, 214.9, 570.4, 226.9);
  ctx.bezierCurveTo(562.4, 234.9, 554.4, 246.9, 545.4, 252.9);
  ctx.bezierCurveTo(551.4, 237.9, 564.9, 223.9, 574.9, 211.4);
  ctx.bezierCurveTo(561.9, 228.9, 540.9, 240.4, 526.4, 256.9);
  ctx.bezierCurveTo(541.9, 245.9, 556.4, 233.4, 570.4, 220.4);
  ctx.bezierCurveTo(553.4, 234.9, 535.4, 248.9, 517.9, 262.9);
  ctx.bezierCurveTo(536.9, 245.9, 555.9, 227.9, 575.9, 211.4);
  ctx.bezierCurveTo(561.4, 230.9, 539.4, 244.9, 520.9, 260.4);
  ctx.bezierCurveTo(531.4, 253.9, 545.9, 243.9, 551.4, 232.4);
  ctx.bezierCurveTo(540.4, 231.9, 525.9, 242.9, 516.4, 248.9);
  ctx.bezierCurveTo(533.4, 239.9, 552.9, 231.9, 567.9, 219.9);
  ctx.bezierCurveTo(548.4, 230.4, 529.9, 246.4, 512.9, 259.9);
  ctx.bezierCurveTo(524.4, 259.9, 545.4, 239.4, 553.9, 232.9);
  ctx.bezierCurveTo(563.4, 225.4, 579.4, 214.4, 583.9, 202.9);
  ctx.bezierCurveTo(574.4, 207.9, 565.9, 214.9, 557.4, 220.9);
  ctx.bezierCurveTo(554.9, 222.9, 540.4, 231.4, 539.4, 236.9);
  ctx.bezierCurveTo(550.9, 233.4, 567.4, 222.4, 573.9, 212.4);
  ctx.bezierCurveTo(569.9, 211.9, 554.4, 222.9, 553.9, 222.9);
  ctx.bezierCurveTo(542.9, 229.9, 530.9, 235.9, 520.9, 243.9);
  ctx.bezierCurveTo(525.4, 246.4, 542.9, 232.4, 546.4, 229.9);
  ctx.bezierCurveTo(552.9, 224.9, 559.4, 218.9, 564.9, 212.4);
  ctx.bezierCurveTo(553.9, 219.9, 541.9, 228.4, 532.4, 237.9);
  ctx.bezierCurveTo(544.9, 231.9, 560.9, 219.4, 568.4, 208.4);
  ctx.bezierCurveTo(553.9, 213.9, 535.4, 227.9, 525.4, 239.9);
  ctx.bezierCurveTo(541.4, 236.4, 559.9, 221.9, 570.9, 210.4);
  ctx.bezierCurveTo(557.4, 217.9, 543.9, 230.9, 532.9, 241.4);
  ctx.bezierCurveTo(550.9, 231.9, 567.4, 214.9, 581.9, 201.4);
  ctx.bezierCurveTo(573.4, 211.4, 563.4, 220.4, 553.9, 229.9);
  ctx.bezierCurveTo(548.4, 235.4, 520.4, 256.4, 521.4, 266.4);
  ctx.bezierCurveTo(530.4, 263.4, 540.4, 256.9, 546.4, 249.4);
  ctx.bezierCurveTo(537.9, 254.9, 530.9, 261.4, 523.4, 267.4);
  ctx.bezierCurveTo(532.4, 260.4, 544.4, 252.9, 550.9, 242.9);
  ctx.bezierCurveTo(543.9, 246.9, 536.9, 251.9, 530.4, 256.9);
  ctx.bezierCurveTo(542.9, 248.9, 560.4, 239.4, 568.4, 226.9);
  ctx.bezierCurveTo(556.9, 227.9, 540.4, 243.9, 532.4, 251.4);
  ctx.bezierCurveTo(547.9, 246.9, 564.9, 231.4, 577.4, 222.4);
  ctx.bezierCurveTo(588.9, 213.9, 600.9, 205.4, 611.4, 195.4);
  ctx.bezierCurveTo(585.4, 211.4, 559.9, 232.4, 538.9, 254.4);
  ctx.bezierCurveTo(541.9, 258.4, 576.9, 230.4, 581.9, 226.4);
  ctx.bezierCurveTo(575.9, 228.9, 568.9, 234.9, 563.9, 238.4);
  ctx.bezierCurveTo(557.9, 243.4, 542.4, 252.4, 538.9, 260.4);
  ctx.bezierCurveTo(554.4, 251.4, 569.9, 239.9, 581.9, 226.9);
  ctx.bezierCurveTo(571.9, 227.4, 558.4, 239.9, 550.4, 245.9);
  ctx.bezierCurveTo(542.9, 251.4, 523.9, 261.9, 519.4, 271.4);
  ctx.bezierCurveTo(535.9, 262.4, 552.4, 250.9, 567.4, 238.9);
  ctx.bezierCurveTo(554.9, 248.4, 541.4, 259.9, 531.4, 271.9);
  ctx.bezierCurveTo(536.9, 271.4, 550.4, 260.4, 553.4, 258.4);
  ctx.bezierCurveTo(561.4, 252.9, 578.9, 244.4, 583.9, 234.9);
  ctx.bezierCurveTo(560.9, 249.4, 536.9, 264.4, 516.4, 282.4);
  ctx.bezierCurveTo(529.4, 280.9, 547.4, 264.4, 557.9, 256.9);
  ctx.bezierCurveTo(566.4, 251.4, 575.4, 245.4, 582.4, 237.9);
  ctx.bezierCurveTo(563.9, 247.9, 542.4, 263.9, 528.9, 279.9);
  ctx.bezierCurveTo(538.9, 275.4, 548.4, 267.4, 556.9, 260.9);
  ctx.bezierCurveTo(563.9, 255.9, 581.4, 245.9, 584.9, 236.9);
  ctx.bezierCurveTo(577.9, 239.4, 549.4, 255.4, 548.9, 262.4);
  ctx.bezierCurveTo(553.4, 260.4, 581.9, 248.4, 578.4, 242.4);
  ctx.bezierCurveTo(566.9, 244.9, 555.9, 250.9, 545.4, 255.9);
  ctx.bezierCurveTo(540.4, 257.9, 524.4, 264.4, 519.4, 268.9);
  ctx.bezierCurveTo(534.4, 261.4, 556.9, 252.9, 566.9, 239.4);
  ctx.bezierCurveTo(554.4, 245.4, 540.9, 252.9, 530.9, 262.4);
  ctx.bezierCurveTo(539.4, 262.9, 557.4, 247.9, 562.9, 241.4);
  ctx.bezierCurveTo(552.9, 239.4, 531.4, 252.9, 523.9, 258.9);
  ctx.bezierCurveTo(533.4, 253.4, 542.9, 247.9, 551.9, 241.9);
  ctx.bezierCurveTo(547.4, 245.4, 533.4, 255.9, 535.9, 262.4);
  ctx.bezierCurveTo(537.9, 266.9, 549.9, 270.9, 553.9, 271.9);
  ctx.bezierCurveTo(545.9, 265.9, 534.9, 258.9, 525.4, 255.9);
  ctx.bezierCurveTo(526.4, 262.9, 534.4, 269.4, 540.9, 271.4);
  ctx.bezierCurveTo(540.4, 264.4, 527.4, 255.4, 522.4, 249.9);
  ctx.bezierCurveTo(528.4, 256.9, 540.9, 268.9, 550.9, 269.4);
  ctx.bezierCurveTo(545.9, 258.9, 529.4, 252.4, 520.4, 245.9);
  ctx.bezierCurveTo(533.4, 251.9, 544.9, 260.4, 557.9, 266.4);
  ctx.bezierCurveTo(548.4, 257.9, 534.4, 253.4, 523.4, 246.9);
  ctx.bezierCurveTo(532.4, 255.4, 542.4, 258.9, 552.4, 265.4);
  ctx.bezierCurveTo(540.4, 263.4, 527.9, 260.4, 516.9, 256.4);
  ctx.bezierCurveTo(522.9, 263.9, 538.4, 279.4, 548.4, 278.4);
  ctx.bezierCurveTo(546.4, 272.4, 542.4, 267.4, 539.4, 262.4);
  ctx.bezierCurveTo(543.4, 264.4, 547.4, 268.4, 551.9, 270.4);
  ctx.bezierCurveTo(546.4, 264.9, 537.9, 261.9, 533.4, 255.4);
  ctx.bezierCurveTo(541.4, 255.4, 550.4, 260.9, 557.4, 263.9);
  ctx.bezierCurveTo(554.9, 262.4, 552.4, 259.9, 550.9, 257.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(568.4, 238.4);
  ctx.bezierCurveTo(571.9, 230.9, 576.9, 225.4, 580.4, 218.4);
  ctx.bezierCurveTo(584.4, 210.4, 586.4, 201.9, 588.9, 193.9);
  ctx.bezierCurveTo(588.9, 200.9, 585.9, 208.9, 581.4, 214.4);
  ctx.bezierCurveTo(580.9, 198.4, 586.4, 181.9, 585.9, 165.4);
  ctx.bezierCurveTo(586.4, 171.9, 585.9, 178.4, 586.9, 184.4);
  ctx.bezierCurveTo(590.9, 175.4, 592.9, 165.4, 597.9, 156.9);
  ctx.bezierCurveTo(599.9, 165.4, 598.9, 175.9, 597.4, 184.9);
  ctx.bezierCurveTo(594.9, 179.9, 593.9, 174.4, 592.9, 169.4);
  ctx.bezierCurveTo(595.9, 175.9, 597.4, 182.9, 600.4, 188.9);
  ctx.bezierCurveTo(601.9, 182.9, 600.9, 176.4, 599.4, 170.4);
  ctx.bezierCurveTo(599.4, 178.9, 596.4, 207.9, 585.9, 209.4);
  ctx.bezierCurveTo(584.9, 204.9, 587.4, 199.9, 589.9, 196.4);
  ctx.bezierCurveTo(591.4, 202.4, 590.4, 208.4, 590.4, 214.4);
  ctx.bezierCurveTo(594.9, 204.9, 595.4, 194.9, 597.9, 184.9);
  ctx.bezierCurveTo(594.9, 192.4, 590.4, 199.4, 585.4, 205.4);
  ctx.bezierCurveTo(587.9, 197.9, 591.4, 186.4, 596.9, 180.9);
  ctx.bezierCurveTo(595.9, 189.4, 589.9, 196.9, 584.9, 203.9);
  ctx.bezierCurveTo(587.9, 197.9, 590.9, 190.9, 594.9, 185.4);
  ctx.bezierCurveTo(594.4, 190.4, 591.4, 194.9, 588.9, 198.9);
  ctx.bezierCurveTo(590.4, 191.4, 590.9, 183.9, 591.9, 176.4);
  ctx.bezierCurveTo(591.9, 181.4, 590.4, 186.9, 588.9, 191.9);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(565.9, 136.9);
  ctx.bezierCurveTo(567.9, 135.9, 570.9, 135.4, 572.9, 135.9);
  ctx.bezierCurveTo(570.9, 137.9, 569.4, 139.9, 567.9, 141.9);
  ctx.bezierCurveTo(569.9, 140.4, 571.9, 138.4, 573.9, 136.4);
  ctx.bezierCurveTo(571.4, 137.9, 569.4, 139.9, 566.9, 141.4);
  ctx.bezierCurveTo(567.4, 138.9, 568.4, 137.9, 570.4, 136.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(575.4, 149.9);
  ctx.bezierCurveTo(578.4, 147.4, 581.4, 146.9, 584.9, 147.4);
  ctx.bezierCurveTo(583.9, 150.4, 579.9, 151.4, 577.9, 150.4);
  ctx.bezierCurveTo(578.9, 153.9, 579.9, 151.4, 581.4, 151.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(563.9, 169.9);
  ctx.bezierCurveTo(562.4, 175.9, 559.9, 181.4, 557.4, 186.9);
  ctx.bezierCurveTo(560.4, 181.9, 564.9, 175.9, 570.4, 173.9);
  ctx.bezierCurveTo(569.9, 176.4, 569.4, 178.9, 567.9, 180.9);
  ctx.bezierCurveTo(566.9, 177.9, 566.9, 174.4, 566.9, 170.9);
  ctx.bezierCurveTo(566.4, 177.4, 566.4, 183.4, 566.4, 189.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(563.9, 195.4);
  ctx.bezierCurveTo(562.4, 197.4, 558.9, 197.4, 562.4, 199.9);
  ctx.bezierCurveTo(561.9, 198.9, 560.9, 197.4, 560.4, 196.4);
  ctx.bezierCurveTo(561.4, 197.4, 561.9, 198.4, 562.9, 199.4);
  ctx.bezierCurveTo(562.4, 198.9, 561.4, 197.9, 560.4, 197.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(593.4, 197.9);
  ctx.bezierCurveTo(590.9, 202.4, 587.4, 206.4, 583.4, 209.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(583.9, 202.4);
  ctx.bezierCurveTo(583.9, 203.9, 583.9, 205.4, 584.4, 206.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(68.9, 0.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(606.9, 328.4);
  ctx.bezierCurveTo(587.9, 280.4, 604.9, 221.4, 613.9, 173.4);
  ctx.bezierCurveTo(613.9, 189.4, 602.9, 205.4, 590.9, 213.4);
  ctx.bezierCurveTo(590.9, 205.4, 593.9, 198.4, 597.9, 191.4);
  ctx.bezierCurveTo(597.9, 195.4, 596.9, 198.4, 596.9, 201.4);
  ctx.bezierCurveTo(597.9, 199.4, 597.9, 200.4, 598.9, 197.4);
  ctx.bezierCurveTo(598.9, 214.4, 582.9, 232.4, 568.9, 241.4);
  ctx.bezierCurveTo(573.9, 229.4, 581.9, 217.4, 589.9, 207.4);
  ctx.bezierCurveTo(581.9, 216.4, 572.9, 224.4, 565.9, 233.4);
  ctx.bezierCurveTo(568.9, 231.4, 573.9, 230.4, 576.9, 228.4);
  ctx.bezierCurveTo(574.9, 232.4, 572.9, 235.4, 569.9, 238.4);
  ctx.bezierCurveTo(569.9, 235.4, 571.9, 232.4, 572.9, 229.4);
  ctx.bezierCurveTo(571.9, 229.4, 571.9, 230.4, 570.9, 230.4);
  ctx.bezierCurveTo(574.9, 225.4, 579.9, 221.4, 585.9, 219.4);
  ctx.bezierCurveTo(582.9, 222.4, 580.9, 227.4, 578.9, 230.4);
  ctx.bezierCurveTo(586.9, 225.4, 593.9, 218.4, 601.9, 212.4);
  ctx.bezierCurveTo(597.9, 217.4, 589.9, 223.4, 586.9, 225.4);
  ctx.bezierCurveTo(584.9, 228.4, 581.9, 232.4, 580.9, 236.4);
  ctx.bezierCurveTo(582.9, 234.4, 586.9, 233.4, 588.9, 232.4);
  ctx.bezierCurveTo(587.9, 237.4, 585.9, 243.4, 582.9, 248.4);
  ctx.bezierCurveTo(585.9, 243.4, 589.9, 239.4, 592.9, 235.4);
  ctx.bezierCurveTo(589.9, 246.4, 582.9, 256.4, 577.9, 266.4);
  ctx.bezierCurveTo(579.9, 265.4, 572.9, 269.4, 570.9, 270.4);
  ctx.bezierCurveTo(574.9, 266.4, 578.9, 261.4, 583.9, 257.4);
  ctx.bezierCurveTo(573.9, 269.4, 562.9, 280.4, 551.9, 291.4);
  ctx.bezierCurveTo(557.9, 285.4, 562.9, 279.4, 567.9, 273.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(576.9, 257.4);
  ctx.bezierCurveTo(570.9, 269.4, 559.9, 280.4, 549.9, 289.4);
  ctx.bezierCurveTo(555.9, 279.4, 563.9, 271.4, 568.9, 261.4);
  ctx.bezierCurveTo(561.9, 271.4, 551.9, 279.4, 540.9, 285.4);
  ctx.bezierCurveTo(550.9, 268.4, 577.9, 251.4, 596.9, 243.4);
  ctx.bezierCurveTo(586.9, 257.4, 568.9, 269.4, 553.9, 278.4);
  ctx.bezierCurveTo(557.9, 273.4, 562.9, 269.4, 567.9, 266.4);
  ctx.bezierCurveTo(562.9, 276.4, 553.9, 285.4, 549.9, 295.4);
  ctx.bezierCurveTo(561.9, 288.4, 571.9, 277.4, 581.9, 268.4);
  ctx.bezierCurveTo(573.9, 277.4, 563.9, 286.4, 553.9, 292.4);
  ctx.bezierCurveTo(557.9, 285.4, 563.9, 279.4, 568.9, 272.4);
  ctx.bezierCurveTo(564.9, 275.4, 559.9, 279.4, 555.9, 282.4);
  ctx.bezierCurveTo(562.9, 272.4, 571.9, 265.4, 579.9, 256.4);
  ctx.bezierCurveTo(566.9, 268.4, 552.9, 281.4, 536.9, 289.4);
  ctx.bezierCurveTo(549.9, 274.4, 567.9, 262.4, 582.9, 248.4);
  ctx.bezierCurveTo(568.9, 257.4, 556.9, 268.4, 543.9, 279.4);
  ctx.bezierCurveTo(557.9, 268.4, 570.9, 257.4, 584.9, 247.4);
  ctx.bezierCurveTo(576.9, 257.4, 566.9, 266.4, 557.9, 276.4);
  ctx.bezierCurveTo(560.9, 274.4, 565.9, 272.4, 568.9, 269.4);
  ctx.bezierCurveTo(561.9, 276.4, 554.9, 283.4, 547.9, 291.4);
  ctx.bezierCurveTo(555.9, 286.4, 563.9, 281.4, 571.9, 275.4);
  ctx.bezierCurveTo(563.9, 281.4, 556.9, 287.4, 549.9, 293.4);
  ctx.bezierCurveTo(552.9, 289.4, 554.9, 284.4, 557.9, 280.4);
  ctx.bezierCurveTo(553.9, 283.4, 548.9, 286.4, 545.9, 290.4);
  ctx.bezierCurveTo(550.9, 284.4, 556.9, 279.4, 562.9, 275.4);
  ctx.bezierCurveTo(555.9, 285.4, 545.9, 295.4, 536.9, 303.4);
  ctx.bezierCurveTo(539.9, 299.4, 542.9, 295.4, 544.9, 290.4);
  ctx.bezierCurveTo(541.9, 293.4, 537.9, 295.4, 535.9, 298.4);
  ctx.bezierCurveTo(535.9, 295.4, 537.9, 292.4, 539.9, 289.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(541.9, 281.4);
  ctx.bezierCurveTo(541.9, 286.4, 540.9, 292.4, 539.9, 298.4);
  ctx.bezierCurveTo(540.9, 290.4, 540.9, 280.4, 544.9, 273.4);
  ctx.bezierCurveTo(546.9, 277.4, 547.9, 282.4, 548.9, 286.4);
  ctx.bezierCurveTo(547.9, 287.4, 547.9, 287.4, 546.9, 289.4);
  ctx.bezierCurveTo(545.9, 289.4, 543.9, 287.4, 542.9, 287.4);
  ctx.bezierCurveTo(542.9, 287.4, 540.9, 292.4, 541.9, 292.4);
  ctx.bezierCurveTo(548.9, 286.4, 554.9, 279.4, 561.9, 274.4);
  ctx.bezierCurveTo(557.9, 281.4, 552.9, 285.4, 546.9, 290.4);
  ctx.bezierCurveTo(552.9, 284.4, 558.9, 279.4, 563.9, 273.4);
  ctx.bezierCurveTo(560.9, 276.4, 555.9, 278.4, 552.9, 280.4);
  ctx.bezierCurveTo(555.9, 276.4, 557.9, 271.4, 560.9, 268.4);
  ctx.bezierCurveTo(552.9, 274.4, 544.9, 281.4, 536.9, 288.4);
  ctx.bezierCurveTo(542.9, 282.4, 549.9, 277.4, 556.9, 271.4);
  ctx.bezierCurveTo(549.9, 280.4, 538.9, 287.4, 532.9, 297.4);
  ctx.bezierCurveTo(542.9, 291.4, 551.9, 284.4, 561.9, 279.4);
  ctx.bezierCurveTo(559.9, 283.4, 557.9, 287.4, 553.9, 291.4);
  ctx.bezierCurveTo(557.9, 287.4, 561.9, 283.4, 565.9, 278.4);
  ctx.bezierCurveTo(558.9, 285.4, 551.9, 293.4, 542.9, 298.4);
  ctx.bezierCurveTo(551.9, 284.4, 564.9, 271.4, 576.9, 259.4);
  ctx.bezierCurveTo(574.9, 263.4, 570.9, 268.4, 566.9, 272.4);
  ctx.bezierCurveTo(568.9, 265.4, 571.9, 258.4, 574.9, 251.4);
  ctx.bezierCurveTo(573.9, 256.4, 572.9, 260.4, 571.9, 265.4);
  ctx.bezierCurveTo(574.9, 251.4, 578.9, 226.4, 587.9, 215.4);
  ctx.bezierCurveTo(588.9, 218.4, 588.9, 222.4, 588.9, 225.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(544.9, 297.4);
  ctx.bezierCurveTo(554.9, 335.4, 577.9, 365.4, 607.9, 386.4);
  ctx.bezierCurveTo(596.9, 386.4, 586.9, 380.4, 578.9, 372.4);
  ctx.bezierCurveTo(584.9, 378.4, 592.9, 383.4, 599.9, 387.4);
  ctx.bezierCurveTo(598.9, 380.4, 594.9, 374.4, 589.9, 369.4);
  ctx.bezierCurveTo(593.9, 376.4, 597.9, 381.4, 602.9, 387.4);
  ctx.bezierCurveTo(598.9, 382.4, 594.9, 378.4, 590.9, 374.4);
  ctx.bezierCurveTo(593.9, 376.4, 595.9, 379.4, 597.9, 382.4);
  ctx.bezierCurveTo(594.9, 380.4, 591.9, 378.4, 588.9, 376.4);
  ctx.bezierCurveTo(591.9, 379.4, 593.9, 381.4, 595.9, 383.4);
  ctx.bezierCurveTo(593.9, 379.4, 590.9, 374.4, 587.9, 371.4);
  ctx.bezierCurveTo(590.9, 375.4, 592.9, 378.4, 596.9, 382.4);
  ctx.bezierCurveTo(591.9, 379.4, 587.9, 375.4, 583.9, 371.4);
  ctx.bezierCurveTo(590.9, 380.4, 601.9, 385.4, 610.9, 390.4);
  ctx.bezierCurveTo(600.9, 374.4, 584.9, 363.4, 577.9, 343.4);
  ctx.bezierCurveTo(569.9, 322.4, 567.9, 300.4, 558.9, 278.4);
  ctx.bezierCurveTo(553.9, 303.4, 567.9, 336.4, 577.9, 359.4);
  ctx.bezierCurveTo(575.9, 334.4, 560.9, 311.4, 549.9, 290.4);
  ctx.bezierCurveTo(561.9, 309.4, 570.9, 331.4, 583.9, 348.4);
  ctx.bezierCurveTo(579.9, 325.4, 559.9, 292.4, 543.9, 274.4);
  ctx.bezierCurveTo(549.9, 296.4, 556.9, 320.4, 566.9, 339.4);
  ctx.bezierCurveTo(560.9, 327.4, 553.9, 316.4, 545.9, 305.4);
  ctx.bezierCurveTo(549.9, 313.4, 552.9, 322.4, 557.9, 330.4);
  ctx.bezierCurveTo(554.9, 312.4, 540.9, 296.4, 535.9, 279.4);
  ctx.bezierCurveTo(544.9, 291.4, 553.9, 304.4, 562.9, 316.4);
  ctx.bezierCurveTo(559.9, 310.4, 555.9, 304.4, 552.9, 298.4);
  ctx.bezierCurveTo(558.9, 308.4, 564.9, 319.4, 571.9, 328.4);
  ctx.bezierCurveTo(565.9, 312.4, 554.9, 298.4, 544.9, 284.4);
  ctx.bezierCurveTo(543.9, 299.4, 551.9, 319.4, 558.9, 332.4);
  ctx.bezierCurveTo(558.9, 322.4, 554.9, 312.4, 552.9, 302.4);
  ctx.bezierCurveTo(557.9, 313.4, 562.9, 323.4, 569.9, 333.4);
  ctx.bezierCurveTo(566.9, 316.4, 556.9, 300.4, 552.9, 283.4);
  ctx.bezierCurveTo(560.9, 294.4, 568.9, 305.4, 573.9, 317.4);
  ctx.bezierCurveTo(563.9, 304.4, 555.9, 289.4, 551.9, 273.4);
  ctx.bezierCurveTo(560.9, 289.4, 565.9, 308.4, 572.9, 325.4);
  ctx.bezierCurveTo(571.9, 313.4, 568.9, 302.4, 565.9, 291.4);
  ctx.bezierCurveTo(570.9, 309.4, 572.9, 329.4, 580.9, 346.4);
  ctx.bezierCurveTo(580.9, 325.4, 572.9, 304.4, 569.9, 284.4);
  ctx.bezierCurveTo(580.9, 306.4, 591.9, 331.4, 606.9, 352.4);
  ctx.bezierCurveTo(608.9, 335.4, 595.9, 305.4, 586.9, 291.4);
  ctx.bezierCurveTo(583.9, 312.4, 587.9, 334.4, 583.9, 354.4);
  ctx.bezierCurveTo(575.9, 337.4, 573.9, 317.4, 570.9, 298.4);
  ctx.bezierCurveTo(573.9, 311.4, 575.9, 325.4, 579.9, 338.4);
  ctx.bezierCurveTo(578.9, 312.4, 572.9, 287.4, 572.9, 261.4);
  ctx.bezierCurveTo(575.9, 276.4, 578.9, 291.4, 582.9, 306.4);
  ctx.bezierCurveTo(578.9, 290.4, 576.9, 274.4, 573.9, 258.4);
  ctx.bezierCurveTo(575.9, 278.4, 576.9, 298.4, 577.9, 317.4);
  ctx.bezierCurveTo(575.9, 298.4, 571.9, 278.4, 572.9, 258.4);
  ctx.bezierCurveTo(576.9, 276.4, 577.9, 296.4, 577.9, 314.4);
  ctx.bezierCurveTo(574.9, 299.4, 572.9, 283.4, 571.9, 267.4);
  ctx.bezierCurveTo(576.9, 284.4, 578.9, 303.4, 579.9, 322.4);
  ctx.bezierCurveTo(574.9, 303.4, 573.9, 284.4, 572.9, 265.4);
  ctx.bezierCurveTo(574.9, 280.4, 572.9, 297.4, 566.9, 311.4);
  ctx.bezierCurveTo(559.9, 294.4, 567.9, 267.4, 574.9, 251.4);
  ctx.bezierCurveTo(579.9, 270.4, 574.9, 296.4, 568.9, 315.4);
  ctx.bezierCurveTo(564.9, 299.4, 567.9, 282.4, 568.9, 266.4);
  ctx.bezierCurveTo(568.9, 283.4, 565.9, 300.4, 563.9, 316.4);
  ctx.bezierCurveTo(562.9, 302.4, 561.9, 285.4, 565.9, 271.4);
  ctx.bezierCurveTo(573.9, 281.4, 573.9, 301.4, 577.9, 314.4);
  ctx.bezierCurveTo(579.9, 298.4, 575.9, 280.4, 578.9, 264.4);
  ctx.bezierCurveTo(589.9, 278.4, 589.9, 300.4, 592.9, 317.4);
  ctx.bezierCurveTo(588.9, 296.4, 585.9, 275.4, 582.9, 254.4);
  ctx.bezierCurveTo(581.9, 277.4, 582.9, 299.4, 579.9, 321.4);
  ctx.bezierCurveTo(577.9, 299.4, 575.9, 277.4, 578.9, 256.4);
  ctx.bezierCurveTo(586.9, 275.4, 577.9, 307.4, 576.9, 328.4);
  ctx.bezierCurveTo(574.9, 302.4, 575.9, 272.4, 580.9, 247.4);
  ctx.bezierCurveTo(581.9, 261.4, 580.9, 276.4, 579.9, 290.4);
  ctx.bezierCurveTo(580.9, 277.4, 578.9, 260.4, 584.9, 248.4);
  ctx.bezierCurveTo(594.9, 254.4, 594.9, 269.4, 595.9, 280.4);
  ctx.bezierCurveTo(594.9, 268.4, 593.9, 257.4, 593.9, 245.4);
  ctx.bezierCurveTo(595.9, 256.4, 595.9, 268.4, 595.9, 280.4);
  ctx.bezierCurveTo(594.9, 267.4, 595.9, 254.4, 593.9, 241.4);
  ctx.bezierCurveTo(592.9, 255.4, 589.9, 269.4, 584.9, 283.4);
  ctx.bezierCurveTo(582.9, 266.4, 584.9, 247.4, 590.9, 231.4);
  ctx.bezierCurveTo(592.9, 246.4, 590.9, 262.4, 585.9, 276.4);
  ctx.bezierCurveTo(580.9, 269.4, 580.9, 257.4, 578.9, 248.4);
  ctx.bezierCurveTo(578.9, 266.4, 579.9, 285.4, 579.9, 304.4);
  ctx.bezierCurveTo(576.9, 298.4, 575.9, 291.4, 576.9, 284.4);
  ctx.bezierCurveTo(582.9, 291.4, 585.9, 302.4, 587.9, 312.4);
  ctx.bezierCurveTo(586.9, 305.4, 584.9, 298.4, 582.9, 291.4);
  ctx.bezierCurveTo(582.9, 294.4, 582.9, 297.4, 582.9, 299.4);
  ctx.bezierCurveTo(583.9, 288.4, 579.9, 277.4, 581.9, 266.4);
  ctx.bezierCurveTo(588.9, 273.4, 589.9, 284.4, 591.9, 293.4);
  ctx.bezierCurveTo(593.9, 283.4, 590.9, 272.4, 588.9, 262.4);
  ctx.bezierCurveTo(589.9, 269.4, 589.9, 277.4, 588.9, 285.4);
  ctx.bezierCurveTo(585.9, 279.4, 584.9, 272.4, 585.9, 265.4);
  ctx.bezierCurveTo(589.9, 272.4, 590.9, 279.4, 591.9, 287.4);
  ctx.bezierCurveTo(592.9, 276.4, 591.9, 265.4, 591.9, 255.4);
  ctx.bezierCurveTo(592.9, 258.4, 593.9, 262.4, 594.9, 266.4);
  ctx.bezierCurveTo(589.9, 256.4, 585.9, 246.4, 579.9, 237.4);
  ctx.bezierCurveTo(579.9, 253.4, 582.9, 271.4, 585.9, 287.4);
  ctx.bezierCurveTo(585.9, 278.4, 582.9, 270.4, 580.9, 262.4);
  ctx.bezierCurveTo(585.9, 276.4, 585.9, 291.4, 588.9, 305.4);
  ctx.bezierCurveTo(587.9, 293.4, 586.9, 280.4, 587.9, 268.4);
  ctx.bezierCurveTo(594.9, 274.4, 595.9, 284.4, 597.9, 292.4);
  ctx.bezierCurveTo(597.9, 290.4, 597.9, 289.4, 596.9, 287.4);
  ctx.bezierCurveTo(596.9, 291.4, 595.9, 296.4, 595.9, 300.4);
  ctx.bezierCurveTo(594.9, 299.4, 594.9, 296.4, 593.9, 295.4);
  ctx.bezierCurveTo(593.9, 297.4, 593.9, 299.4, 593.9, 301.4);
  ctx.bezierCurveTo(592.9, 299.4, 592.9, 296.4, 592.9, 293.4);
  ctx.bezierCurveTo(593.9, 299.4, 595.9, 305.4, 595.9, 311.4);
  ctx.bezierCurveTo(595.9, 307.4, 593.9, 303.4, 592.9, 299.4);
  ctx.bezierCurveTo(595.9, 314.4, 596.9, 329.4, 595.9, 344.4);
  ctx.bezierCurveTo(594.9, 340.4, 591.9, 331.4, 590.9, 330.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(574.9, 287.4);
  ctx.bezierCurveTo(577.9, 315.4, 576.9, 344.4, 581.9, 372.4);
  ctx.bezierCurveTo(581.9, 358.4, 577.9, 343.4, 578.9, 331.4);
  ctx.bezierCurveTo(584.9, 340.4, 588.9, 350.4, 593.9, 359.4);
  ctx.bezierCurveTo(592.9, 352.4, 590.9, 345.4, 586.9, 339.4);
  ctx.bezierCurveTo(587.9, 349.4, 589.9, 358.4, 590.9, 367.4);
  ctx.bezierCurveTo(584.9, 354.4, 579.9, 340.4, 573.9, 327.4);
  ctx.bezierCurveTo(577.9, 336.4, 582.9, 345.4, 587.9, 354.4);
  ctx.bezierCurveTo(586.9, 343.4, 581.9, 333.4, 578.9, 323.4);
  ctx.bezierCurveTo(584.9, 329.4, 588.9, 336.4, 592.9, 343.4);
  ctx.bezierCurveTo(588.9, 327.4, 579.9, 313.4, 572.9, 298.4);
  ctx.bezierCurveTo(584.9, 303.4, 592.9, 322.4, 596.9, 334.4);
  ctx.bezierCurveTo(589.9, 325.4, 584.9, 314.4, 577.9, 306.4);
  ctx.bezierCurveTo(578.9, 314.4, 581.9, 322.4, 585.9, 329.4);
  ctx.bezierCurveTo(584.9, 317.4, 581.9, 305.4, 579.9, 293.4);
  ctx.bezierCurveTo(581.9, 301.4, 582.9, 309.4, 581.9, 315.4);
  ctx.bezierCurveTo(569.9, 302.4, 562.9, 284.4, 551.9, 273.4);
  ctx.bezierCurveTo(555.9, 282.4, 559.9, 292.4, 563.9, 301.4);
  ctx.bezierCurveTo(563.9, 298.4, 563.9, 295.4, 562.9, 292.4);
  ctx.bezierCurveTo(562.9, 294.4, 562.9, 303.4, 562.9, 302.4);
  ctx.bezierCurveTo(562.9, 300.4, 562.9, 299.4, 564.9, 299.4);
  ctx.bezierCurveTo(567.9, 301.4, 566.9, 303.4, 568.9, 306.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(584.9, 335.4);
  ctx.bezierCurveTo(589.9, 348.4, 592.9, 360.4, 596.9, 373.4);
  ctx.bezierCurveTo(594.9, 360.4, 592.9, 348.4, 589.9, 335.4);
  ctx.bezierCurveTo(592.9, 345.4, 594.9, 356.4, 598.9, 365.4);
  ctx.bezierCurveTo(597.9, 357.4, 594.9, 348.4, 591.9, 340.4);
  ctx.bezierCurveTo(593.9, 350.4, 594.9, 361.4, 596.9, 371.4);
  ctx.bezierCurveTo(595.9, 359.4, 592.9, 346.4, 591.9, 334.4);
  ctx.bezierCurveTo(595.9, 345.4, 597.9, 356.4, 598.9, 367.4);
  ctx.bezierCurveTo(599.9, 353.4, 598.9, 339.4, 597.9, 325.4);
  ctx.bezierCurveTo(599.9, 332.4, 600.9, 340.4, 601.9, 348.4);
  ctx.bezierCurveTo(598.9, 341.4, 596.9, 334.4, 594.9, 326.4);
  ctx.bezierCurveTo(596.9, 334.4, 598.9, 343.4, 600.9, 351.4);
  ctx.bezierCurveTo(599.9, 342.4, 598.9, 333.4, 596.9, 324.4);
  ctx.bezierCurveTo(597.9, 327.4, 599.9, 333.4, 600.9, 338.4);
  ctx.bezierCurveTo(599.9, 331.4, 597.9, 324.4, 596.9, 317.4);
  ctx.bezierCurveTo(597.9, 321.4, 599.9, 325.4, 600.9, 329.4);
  ctx.bezierCurveTo(599.9, 323.4, 598.9, 317.4, 596.9, 311.4);
  ctx.bezierCurveTo(599.9, 315.4, 602.9, 320.4, 603.9, 325.4);
  ctx.bezierCurveTo(603.9, 323.4, 602.9, 321.4, 601.9, 319.4);
  ctx.bezierCurveTo(602.9, 327.4, 604.9, 335.4, 604.9, 341.4);
  ctx.bezierCurveTo(604.9, 341.4, 605.9, 339.4, 606.9, 339.4);
  ctx.bezierCurveTo(607.9, 342.4, 607.9, 345.4, 608.9, 348.4);
  ctx.bezierCurveTo(608.9, 346.4, 608.9, 345.4, 607.9, 343.4);
  ctx.bezierCurveTo(608.9, 352.4, 605.9, 358.4, 605.9, 367.4);
  ctx.bezierCurveTo(604.9, 363.4, 603.9, 359.4, 602.9, 355.4);
  ctx.bezierCurveTo(602.9, 361.4, 602.9, 367.4, 602.9, 373.4);
  ctx.bezierCurveTo(600.9, 369.4, 597.9, 365.4, 595.9, 361.4);
  ctx.bezierCurveTo(596.9, 364.4, 597.9, 368.4, 598.9, 371.4);
  ctx.bezierCurveTo(592.9, 368.4, 588.9, 363.4, 584.9, 358.4);
  ctx.bezierCurveTo(585.9, 360.4, 586.9, 363.4, 587.9, 365.4);
  ctx.bezierCurveTo(583.9, 360.4, 580.9, 356.4, 576.9, 352.4);
  ctx.bezierCurveTo(577.9, 359.4, 579.9, 365.4, 582.9, 371.4);
  ctx.bezierCurveTo(583.9, 371.4, 592.9, 375.4, 594.9, 376.4);
  ctx.bezierCurveTo(593.9, 372.4, 594.9, 367.4, 593.9, 362.4);
  ctx.bezierCurveTo(598.9, 367.4, 602.9, 373.4, 606.9, 379.4);
  ctx.bezierCurveTo(606.9, 371.4, 604.9, 363.4, 603.9, 355.4);
  ctx.bezierCurveTo(604.9, 359.4, 606.9, 363.4, 607.9, 367.4);
  ctx.bezierCurveTo(606.9, 360.4, 603.9, 353.4, 602.9, 346.4);
  ctx.bezierCurveTo(603.9, 351.4, 603.9, 356.4, 604.9, 361.4);
  ctx.bezierCurveTo(603.9, 358.4, 602.9, 354.4, 601.9, 351.4);
  ctx.bezierCurveTo(602.9, 359.4, 603.9, 367.4, 603.9, 375.4);
  ctx.bezierCurveTo(603.9, 370.4, 602.9, 364.4, 601.9, 359.4);
  ctx.bezierCurveTo(602.9, 365.4, 602.9, 370.4, 602.9, 376.4);
  ctx.bezierCurveTo(602.9, 371.4, 602.9, 365.4, 603.9, 359.4);
  ctx.bezierCurveTo(604.9, 365.4, 605.9, 372.4, 605.9, 378.4);
  ctx.bezierCurveTo(606.9, 370.4, 605.9, 363.4, 605.9, 355.4);
  ctx.bezierCurveTo(606.9, 356.4, 606.9, 356.4, 606.9, 357.4);
  ctx.bezierCurveTo(607.9, 351.4, 607.9, 345.4, 607.9, 339.4);
  ctx.bezierCurveTo(608.9, 343.4, 610.9, 347.4, 611.9, 350.4);
  ctx.bezierCurveTo(611.9, 347.4, 612.9, 344.4, 611.9, 340.4);
  ctx.bezierCurveTo(612.9, 343.4, 612.9, 345.4, 613.9, 348.4);
  ctx.bezierCurveTo(611.9, 340.4, 614.9, 335.4, 613.9, 326.4);
  ctx.bezierCurveTo(613.9, 335.4, 614.9, 345.4, 610.9, 352.4);
  ctx.bezierCurveTo(607.9, 347.4, 605.9, 341.4, 603.9, 334.4);
  ctx.bezierCurveTo(604.9, 338.4, 606.9, 343.4, 607.9, 346.4);
  ctx.bezierCurveTo(607.9, 341.4, 607.9, 337.4, 606.9, 332.4);
  ctx.bezierCurveTo(607.9, 338.4, 608.9, 344.4, 608.9, 351.4);
  ctx.bezierCurveTo(607.9, 347.4, 603.9, 342.4, 601.9, 339.4);
  ctx.bezierCurveTo(601.9, 342.4, 601.9, 346.4, 601.9, 350.4);
  ctx.bezierCurveTo(601.9, 343.4, 600.9, 336.4, 600.9, 329.4);
  ctx.bezierCurveTo(607.9, 340.4, 606.9, 358.4, 606.9, 371.4);
  ctx.bezierCurveTo(606.9, 370.4, 606.9, 368.4, 606.9, 367.4);
  ctx.bezierCurveTo(606.9, 368.4, 606.9, 369.4, 606.9, 369.4);
  ctx.bezierCurveTo(607.9, 367.4, 607.9, 365.4, 607.9, 363.4);
  ctx.bezierCurveTo(607.9, 368.4, 608.9, 373.4, 609.9, 378.4);
  ctx.bezierCurveTo(610.9, 376.4, 610.9, 373.4, 610.9, 371.4);
  ctx.bezierCurveTo(610.9, 372.4, 611.9, 373.4, 611.9, 374.4);
  ctx.bezierCurveTo(612.9, 373.4, 612.9, 369.4, 613.9, 367.4);
  ctx.bezierCurveTo(612.9, 371.4, 611.9, 375.4, 611.9, 378.4);
  ctx.bezierCurveTo(609.9, 370.4, 607.9, 361.4, 606.9, 353.4);
  ctx.bezierCurveTo(606.9, 356.4, 607.9, 360.4, 607.9, 364.4);
  ctx.bezierCurveTo(607.9, 354.4, 605.9, 345.4, 605.9, 335.4);
  ctx.bezierCurveTo(606.9, 338.4, 607.9, 342.4, 608.9, 345.4);
  ctx.bezierCurveTo(609.9, 337.4, 608.9, 329.4, 606.9, 321.4);
  ctx.bezierCurveTo(606.9, 333.4, 608.9, 346.4, 606.9, 357.4);
  ctx.bezierCurveTo(598.9, 345.4, 592.9, 331.4, 586.9, 318.4);
  ctx.bezierCurveTo(587.9, 321.4, 588.9, 324.4, 589.9, 327.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(603.9, 268.4);
  ctx.bezierCurveTo(607.9, 255.4, 609.9, 241.4, 610.9, 227.4);
  ctx.bezierCurveTo(606.9, 246.4, 600.9, 264.4, 598.9, 283.4);
  ctx.bezierCurveTo(599.9, 268.4, 602.9, 252.4, 605.9, 236.4);
  ctx.bezierCurveTo(607.9, 245.4, 607.9, 254.4, 606.9, 263.4);
  ctx.bezierCurveTo(604.9, 246.4, 603.9, 228.4, 602.9, 211.4);
  ctx.bezierCurveTo(602.9, 224.4, 600.9, 239.4, 596.9, 253.4);
  ctx.bezierCurveTo(594.9, 246.4, 594.9, 240.4, 595.9, 233.4);
  ctx.bezierCurveTo(595.9, 242.4, 594.9, 250.4, 594.9, 258.4);
  ctx.bezierCurveTo(597.9, 247.4, 599.9, 235.4, 604.9, 225.4);
  ctx.bezierCurveTo(605.9, 232.4, 605.9, 238.4, 604.9, 245.4);
  ctx.bezierCurveTo(604.9, 238.4, 605.9, 230.4, 608.9, 223.4);
  ctx.bezierCurveTo(607.9, 226.4, 607.9, 228.4, 607.9, 231.4);
  ctx.bezierCurveTo(610.9, 220.4, 611.9, 210.4, 613.9, 199.4);
  ctx.bezierCurveTo(612.9, 203.4, 612.9, 206.4, 611.9, 209.4);
  ctx.bezierCurveTo(613.9, 202.4, 614.9, 194.4, 617.9, 187.4);
  ctx.bezierCurveTo(617.9, 191.4, 618.9, 195.4, 617.9, 199.4);
  ctx.bezierCurveTo(619.9, 192.4, 619.9, 185.4, 620.9, 177.4);
  ctx.bezierCurveTo(619.9, 181.4, 618.9, 184.4, 617.9, 187.4);
  ctx.bezierCurveTo(618.9, 178.4, 619.9, 169.4, 620.9, 160.4);
  ctx.bezierCurveTo(620.9, 165.4, 620.9, 170.4, 620.9, 175.4);
  ctx.bezierCurveTo(620.9, 168.4, 620.9, 160.4, 621.9, 152.4);
  ctx.bezierCurveTo(619.9, 160.4, 617.9, 168.4, 613.9, 176.4);
  ctx.bezierCurveTo(613.9, 171.4, 611.9, 166.4, 611.9, 161.4);
  ctx.bezierCurveTo(611.9, 164.4, 610.9, 167.4, 609.9, 169.4);
  ctx.bezierCurveTo(611.9, 161.4, 612.9, 153.4, 614.9, 144.4);
  ctx.bezierCurveTo(613.9, 153.4, 612.9, 162.4, 609.9, 171.4);
  ctx.bezierCurveTo(607.9, 160.4, 608.9, 149.4, 608.9, 139.4);
  ctx.bezierCurveTo(608.9, 141.4, 609.9, 143.4, 609.9, 145.4);
  ctx.bezierCurveTo(609.9, 141.4, 608.9, 136.4, 607.9, 132.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(596.9, 130.4);
  ctx.bezierCurveTo(607.9, 128.4, 610.9, 144.4, 610.9, 152.4);
  ctx.bezierCurveTo(610.9, 143.4, 610.9, 133.4, 608.9, 124.4);
  ctx.bezierCurveTo(608.9, 133.4, 608.9, 143.4, 608.9, 152.4);
  ctx.bezierCurveTo(610.9, 144.4, 611.9, 134.4, 613.9, 126.4);
  ctx.bezierCurveTo(614.9, 138.4, 614.9, 150.4, 613.9, 161.4);
  ctx.bezierCurveTo(612.9, 155.4, 612.9, 149.4, 612.9, 143.4);
  ctx.bezierCurveTo(614.9, 156.4, 613.9, 170.4, 611.9, 183.4);
  ctx.bezierCurveTo(610.9, 176.4, 610.9, 169.4, 612.9, 163.4);
  ctx.bezierCurveTo(611.9, 174.4, 609.9, 186.4, 605.9, 197.4);
  ctx.bezierCurveTo(605.9, 186.4, 608.9, 175.4, 611.9, 165.4);
  ctx.bezierCurveTo(612.9, 172.4, 612.9, 179.4, 611.9, 185.4);
  ctx.bezierCurveTo(613.9, 180.4, 614.9, 174.4, 616.9, 169.4);
  ctx.bezierCurveTo(617.9, 176.4, 616.9, 184.4, 613.9, 191.4);
  ctx.bezierCurveTo(613.9, 187.4, 612.9, 182.4, 613.9, 177.4);
  ctx.bezierCurveTo(613.9, 181.4, 613.9, 185.4, 612.9, 189.4);
  ctx.bezierCurveTo(613.9, 185.4, 615.9, 180.4, 616.9, 176.4);
  ctx.bezierCurveTo(617.9, 179.4, 618.9, 182.4, 618.9, 185.4);
  ctx.bezierCurveTo(619.9, 182.4, 619.9, 179.4, 620.9, 177.4);
  ctx.bezierCurveTo(622.9, 187.4, 618.9, 200.4, 616.9, 210.4);
  ctx.bezierCurveTo(616.9, 206.4, 616.9, 202.4, 617.9, 197.4);
  ctx.bezierCurveTo(614.9, 206.4, 611.9, 214.4, 607.9, 222.4);
  ctx.bezierCurveTo(607.9, 218.4, 608.9, 214.4, 609.9, 210.4);
  ctx.bezierCurveTo(608.9, 217.4, 606.9, 223.4, 603.9, 229.4);
  ctx.bezierCurveTo(607.9, 217.4, 612.9, 206.4, 617.9, 194.4);
  ctx.bezierCurveTo(617.9, 196.4, 616.9, 198.4, 616.9, 200.4);
  ctx.bezierCurveTo(619.9, 178.4, 629.9, 160.4, 632.9, 138.4);
  ctx.bezierCurveTo(630.9, 144.4, 627.9, 149.4, 624.9, 154.4);
  ctx.bezierCurveTo(624.9, 152.4, 623.9, 149.4, 623.9, 146.4);
  ctx.bezierCurveTo(622.9, 152.4, 621.9, 158.4, 619.9, 163.4);
  ctx.bezierCurveTo(623.9, 153.4, 625.9, 142.4, 627.9, 132.4);
  ctx.bezierCurveTo(626.9, 143.4, 624.9, 154.4, 619.9, 164.4);
  ctx.bezierCurveTo(620.9, 154.4, 624.9, 144.4, 626.9, 134.4);
  ctx.bezierCurveTo(625.9, 141.4, 623.9, 148.4, 620.9, 156.4);
  ctx.bezierCurveTo(621.9, 144.4, 623.9, 133.4, 625.9, 122.4);
  ctx.bezierCurveTo(625.9, 126.4, 623.9, 130.4, 622.9, 134.4);
  ctx.bezierCurveTo(622.9, 129.4, 622.9, 124.4, 623.9, 119.4);
  ctx.bezierCurveTo(623.9, 127.4, 620.9, 136.4, 617.9, 143.4);
  ctx.bezierCurveTo(616.9, 136.4, 618.9, 130.4, 620.9, 123.4);
  ctx.bezierCurveTo(620.9, 130.4, 618.9, 136.4, 617.9, 143.4);
  ctx.bezierCurveTo(616.9, 138.4, 616.9, 133.4, 617.9, 127.4);
  ctx.bezierCurveTo(619.9, 136.4, 618.9, 145.4, 616.9, 154.4);
  ctx.bezierCurveTo(616.9, 149.4, 615.9, 145.4, 615.9, 140.4);
  ctx.bezierCurveTo(614.9, 147.4, 614.9, 155.4, 613.9, 162.4);
  ctx.bezierCurveTo(611.9, 154.4, 611.9, 146.4, 611.9, 138.4);
  ctx.bezierCurveTo(612.9, 143.4, 613.9, 149.4, 614.9, 155.4);
  ctx.bezierCurveTo(614.9, 148.4, 614.9, 141.4, 614.9, 134.4);
  ctx.bezierCurveTo(616.9, 142.4, 616.9, 151.4, 615.9, 159.4);
  ctx.bezierCurveTo(616.9, 152.4, 616.9, 144.4, 619.9, 137.4);
  ctx.bezierCurveTo(620.9, 142.4, 621.9, 147.4, 620.9, 152.4);
  ctx.bezierCurveTo(620.9, 144.4, 622.9, 135.4, 625.9, 128.4);
  ctx.bezierCurveTo(625.9, 128.4, 625.9, 129.4, 625.9, 130.4);
  ctx.bezierCurveTo(624.9, 131.4, 625.9, 127.4, 625.9, 127.4);
  ctx.bezierCurveTo(626.9, 128.4, 626.9, 128.4, 627.9, 129.4);
  ctx.bezierCurveTo(628.9, 127.4, 627.9, 125.4, 628.9, 124.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(632.9, 105.4);
  ctx.bezierCurveTo(632.9, 107.4, 632.9, 108.4, 632.9, 110.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(621.9, 119.4);
  ctx.bezierCurveTo(626.9, 115.4, 632.9, 113.4, 637.9, 111.4);
  ctx.bezierCurveTo(634.9, 115.4, 629.9, 119.4, 624.9, 120.4);
  ctx.bezierCurveTo(627.9, 113.4, 635.9, 108.4, 640.9, 102.4);
  ctx.bezierCurveTo(628.9, 108.4, 615.9, 114.4, 602.9, 121.4);
  ctx.bezierCurveTo(608.9, 118.4, 614.9, 116.4, 620.9, 116.4);
  ctx.bezierCurveTo(617.9, 119.4, 615.9, 123.4, 612.9, 125.4);
  ctx.bezierCurveTo(618.9, 122.4, 624.9, 118.4, 629.9, 113.4);
  ctx.bezierCurveTo(624.9, 115.4, 619.9, 117.4, 615.9, 120.4);
  ctx.bezierCurveTo(619.9, 117.4, 623.9, 114.4, 627.9, 112.4);
  ctx.bezierCurveTo(625.9, 113.4, 623.9, 116.4, 621.9, 118.4);
  ctx.bezierCurveTo(633.9, 114.4, 637.9, 131.4, 644.9, 137.4);
  ctx.bezierCurveTo(643.9, 136.4, 640.9, 135.4, 638.9, 134.4);
  ctx.bezierCurveTo(646.9, 139.4, 654.9, 144.4, 662.9, 147.4);
  ctx.bezierCurveTo(649.9, 137.4, 633.9, 130.4, 621.9, 118.4);
  ctx.bezierCurveTo(629.9, 126.4, 640.9, 132.4, 650.9, 137.4);
  ctx.bezierCurveTo(647.9, 134.4, 645.9, 129.4, 642.9, 126.4);
  ctx.bezierCurveTo(655.9, 137.4, 667.9, 151.4, 681.9, 161.4);
  ctx.bezierCurveTo(676.9, 150.4, 664.9, 141.4, 655.9, 134.4);
  ctx.bezierCurveTo(664.9, 142.4, 674.9, 150.4, 686.9, 154.4);
  ctx.bezierCurveTo(677.9, 143.4, 660.9, 134.4, 648.9, 126.4);
  ctx.bezierCurveTo(654.9, 136.4, 662.9, 146.4, 673.9, 150.4);
  ctx.bezierCurveTo(670.9, 138.4, 655.9, 121.4, 644.9, 114.4);
  ctx.bezierCurveTo(650.9, 126.4, 659.9, 138.4, 670.9, 147.4);
  ctx.bezierCurveTo(669.9, 139.4, 663.9, 133.4, 658.9, 128.4);
  ctx.bezierCurveTo(664.9, 135.4, 671.9, 141.4, 679.9, 147.4);
  ctx.bezierCurveTo(664.9, 138.4, 650.9, 127.4, 634.9, 118.4);
  ctx.bezierCurveTo(639.9, 124.4, 644.9, 129.4, 650.9, 133.4);
  ctx.bezierCurveTo(647.9, 130.4, 643.9, 126.4, 640.9, 123.4);
  ctx.bezierCurveTo(647.9, 127.4, 654.9, 131.4, 661.9, 136.4);
  ctx.bezierCurveTo(653.9, 131.4, 647.9, 125.4, 642.9, 118.4);
  ctx.bezierCurveTo(647.9, 121.4, 652.9, 124.4, 658.9, 127.4);
  ctx.bezierCurveTo(654.9, 124.4, 651.9, 120.4, 648.9, 117.4);
  ctx.bezierCurveTo(652.9, 120.4, 656.9, 123.4, 660.9, 126.4);
  ctx.bezierCurveTo(654.9, 122.4, 648.9, 118.4, 641.9, 116.4);
  ctx.bezierCurveTo(642.9, 119.4, 644.9, 123.4, 645.9, 125.4);
  ctx.bezierCurveTo(644.9, 125.4, 642.9, 125.4, 640.9, 125.4);
  ctx.bezierCurveTo(650.9, 134.4, 662.9, 141.4, 673.9, 150.4);
  ctx.bezierCurveTo(671.9, 149.4, 668.9, 148.4, 666.9, 147.4);
  ctx.bezierCurveTo(669.9, 150.4, 671.9, 154.4, 675.9, 157.4);
  ctx.bezierCurveTo(672.9, 154.4, 669.9, 152.4, 666.9, 150.4);
  ctx.bezierCurveTo(669.9, 153.4, 671.9, 157.4, 674.9, 159.4);
  ctx.bezierCurveTo(665.9, 154.4, 656.9, 148.4, 647.9, 142.4);
  ctx.bezierCurveTo(653.9, 147.4, 660.9, 151.4, 666.9, 154.4);
  ctx.bezierCurveTo(666.9, 153.4, 665.9, 151.4, 664.9, 150.4);
  ctx.bezierCurveTo(669.9, 154.4, 674.9, 158.4, 678.9, 163.4);
  ctx.bezierCurveTo(678.9, 163.4, 674.9, 162.4, 675.9, 162.4);
  ctx.bezierCurveTo(685.9, 167.4, 695.9, 170.4, 705.9, 173.4);
  ctx.bezierCurveTo(701.9, 170.4, 696.9, 166.4, 692.9, 163.4);
  ctx.bezierCurveTo(698.9, 165.4, 704.9, 168.4, 709.9, 172.4);
  ctx.bezierCurveTo(697.9, 168.4, 683.9, 164.4, 672.9, 157.4);
  ctx.bezierCurveTo(686.9, 160.4, 703.9, 164.4, 716.9, 171.4);
  ctx.bezierCurveTo(708.9, 172.4, 700.9, 170.4, 692.9, 168.4);
  ctx.bezierCurveTo(704.9, 172.4, 716.9, 174.4, 728.9, 177.4);
  ctx.bezierCurveTo(727.9, 177.4, 726.9, 177.4, 724.9, 177.4);
  ctx.bezierCurveTo(734.9, 179.4, 744.9, 180.4, 753.9, 180.4);
  ctx.bezierCurveTo(739.9, 177.4, 725.9, 176.4, 711.9, 174.4);
  ctx.bezierCurveTo(719.9, 174.4, 727.9, 176.4, 734.9, 177.4);
  ctx.bezierCurveTo(724.9, 176.4, 712.9, 175.4, 702.9, 172.4);
  ctx.bezierCurveTo(721.9, 174.4, 740.9, 178.4, 759.9, 179.4);
  ctx.bezierCurveTo(740.9, 177.4, 721.9, 175.4, 702.9, 173.4);
  ctx.bezierCurveTo(708.9, 174.4, 713.9, 175.4, 718.9, 176.4);
  ctx.bezierCurveTo(718.9, 176.4, 717.9, 176.4, 716.9, 176.4);
  ctx.bezierCurveTo(723.9, 176.4, 731.9, 177.4, 739.9, 178.4);
  ctx.bezierCurveTo(730.9, 179.4, 721.9, 178.4, 712.9, 178.4);
  ctx.bezierCurveTo(716.9, 178.4, 721.9, 178.4, 725.9, 178.4);
  ctx.bezierCurveTo(722.9, 177.4, 720.9, 177.4, 717.9, 177.4);
  ctx.bezierCurveTo(720.9, 177.4, 723.9, 177.4, 727.9, 178.4);
  ctx.bezierCurveTo(713.9, 176.4, 699.9, 174.4, 685.9, 172.4);
  ctx.bezierCurveTo(695.9, 173.4, 704.9, 176.4, 713.9, 176.4);
  ctx.bezierCurveTo(710.9, 175.4, 707.9, 174.4, 703.9, 173.4);
  ctx.bezierCurveTo(707.9, 175.4, 711.9, 177.4, 715.9, 179.4);
  ctx.bezierCurveTo(702.9, 176.4, 687.9, 172.4, 676.9, 164.4);
  ctx.bezierCurveTo(679.9, 165.4, 682.9, 166.4, 684.9, 167.4);
  ctx.bezierCurveTo(682.9, 165.4, 680.9, 164.4, 677.9, 162.4);
  ctx.bezierCurveTo(682.9, 166.4, 687.9, 169.4, 693.9, 171.4);
  ctx.bezierCurveTo(678.9, 164.4, 665.9, 153.4, 652.9, 143.4);
  ctx.bezierCurveTo(667.9, 149.4, 682.9, 156.4, 698.9, 162.4);
  ctx.bezierCurveTo(696.9, 161.4, 695.9, 160.4, 693.9, 158.4);
  ctx.bezierCurveTo(700.9, 162.4, 705.9, 167.4, 711.9, 171.4);
  ctx.bezierCurveTo(710.9, 169.4, 707.9, 168.4, 705.9, 166.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(704.9, 89.4);
  ctx.bezierCurveTo(689.9, 92.4, 680.9, 96.4, 669.9, 106.4);
  ctx.bezierCurveTo(676.9, 97.4, 690.9, 91.4, 701.9, 90.4);
  ctx.bezierCurveTo(691.9, 90.4, 675.9, 90.4, 670.9, 101.4);
  ctx.bezierCurveTo(679.9, 97.4, 689.9, 92.4, 698.9, 88.4);
  ctx.bezierCurveTo(680.9, 91.4, 676.9, 92.4, 675.9, 108.4);
  ctx.bezierCurveTo(674.9, 123.4, 683.9, 152.4, 700.9, 155.4);
  ctx.bezierCurveTo(695.9, 147.4, 648.9, 121.4, 663.9, 106.4);
  ctx.bezierCurveTo(671.9, 121.4, 676.9, 141.4, 692.9, 150.4);
  ctx.bezierCurveTo(690.9, 135.4, 680.9, 120.4, 672.9, 107.4);
  ctx.bezierCurveTo(680.9, 142.4, 712.9, 160.4, 744.9, 163.4);
  ctx.bezierCurveTo(729.9, 155.4, 708.9, 143.4, 692.9, 140.4);
  ctx.bezierCurveTo(699.9, 162.4, 731.9, 190.4, 756.9, 185.4);
  ctx.bezierCurveTo(746.9, 174.4, 717.9, 165.4, 701.9, 159.4);
  ctx.bezierCurveTo(723.9, 171.4, 748.9, 184.4, 774.9, 181.4);
  ctx.bezierCurveTo(750.9, 172.4, 721.9, 166.4, 696.9, 160.4);
  ctx.bezierCurveTo(723.9, 167.4, 750.9, 177.4, 778.9, 179.4);
  ctx.bezierCurveTo(754.9, 173.4, 720.9, 174.4, 699.9, 159.4);
  ctx.bezierCurveTo(715.9, 165.4, 732.9, 165.4, 748.9, 167.4);
  ctx.bezierCurveTo(718.9, 158.4, 687.9, 152.4, 658.9, 144.4);
  ctx.bezierCurveTo(683.9, 158.4, 722.9, 158.4, 750.9, 160.4);
  ctx.bezierCurveTo(736.9, 151.4, 721.9, 146.4, 708.9, 136.4);
  ctx.bezierCurveTo(719.9, 148.4, 734.9, 161.4, 750.9, 166.4);
  ctx.bezierCurveTo(735.9, 151.4, 715.9, 141.4, 698.9, 128.4);
  ctx.bezierCurveTo(709.9, 142.4, 724.9, 155.4, 741.9, 161.4);
  ctx.bezierCurveTo(721.9, 152.4, 703.9, 139.4, 687.9, 124.4);
  ctx.bezierCurveTo(705.9, 138.4, 718.9, 150.4, 738.9, 159.4);
  ctx.bezierCurveTo(720.9, 150.4, 706.9, 145.4, 691.9, 134.4);
  ctx.bezierCurveTo(696.9, 147.4, 708.9, 154.4, 722.9, 155.4);
  ctx.bezierCurveTo(708.9, 139.4, 693.9, 131.4, 685.9, 111.4);
  ctx.bezierCurveTo(687.9, 115.4, 688.9, 120.4, 690.9, 125.4);
  ctx.bezierCurveTo(689.9, 123.4, 687.9, 121.4, 686.9, 119.4);
  ctx.bezierCurveTo(687.9, 122.4, 688.9, 125.4, 688.9, 127.4);
  ctx.bezierCurveTo(685.9, 123.4, 682.9, 118.4, 680.9, 113.4);
  ctx.bezierCurveTo(682.9, 116.4, 684.9, 120.4, 686.9, 123.4);
  ctx.bezierCurveTo(685.9, 122.4, 683.9, 121.4, 682.9, 119.4);
  ctx.bezierCurveTo(682.9, 125.4, 684.9, 131.4, 687.9, 137.4);
  ctx.bezierCurveTo(687.9, 131.4, 686.9, 125.4, 686.9, 120.4);
  ctx.bezierCurveTo(688.9, 122.4, 692.9, 124.4, 693.9, 126.4);
  ctx.bezierCurveTo(694.9, 123.4, 694.9, 119.4, 694.9, 117.4);
  ctx.bezierCurveTo(695.9, 118.4, 695.9, 119.4, 696.9, 121.4);
  ctx.bezierCurveTo(695.9, 116.4, 694.9, 111.4, 692.9, 107.4);
  ctx.bezierCurveTo(692.9, 114.4, 694.9, 121.4, 694.9, 128.4);
  ctx.bezierCurveTo(689.9, 123.4, 686.9, 116.4, 684.9, 109.4);
  ctx.bezierCurveTo(686.9, 115.4, 688.9, 121.4, 692.9, 126.4);
  ctx.bezierCurveTo(692.9, 125.4, 692.9, 121.4, 692.9, 121.4);
  ctx.bezierCurveTo(696.9, 129.4, 701.9, 137.4, 707.9, 143.4);
  ctx.bezierCurveTo(702.9, 135.4, 696.9, 127.4, 691.9, 118.4);
  ctx.bezierCurveTo(701.9, 125.4, 710.9, 137.4, 720.9, 142.4);
  ctx.bezierCurveTo(717.9, 132.4, 708.9, 123.4, 701.9, 116.4);
  ctx.bezierCurveTo(706.9, 129.4, 717.9, 140.4, 727.9, 150.4);
  ctx.bezierCurveTo(717.9, 136.4, 704.9, 126.4, 694.9, 112.4);
  ctx.bezierCurveTo(710.9, 126.4, 726.9, 141.4, 745.9, 152.4);
  ctx.bezierCurveTo(728.9, 136.4, 708.9, 121.4, 689.9, 108.4);
  ctx.bezierCurveTo(698.9, 137.4, 730.9, 159.4, 758.9, 161.4);
  ctx.bezierCurveTo(741.9, 146.4, 721.9, 129.4, 702.9, 115.4);
  ctx.bezierCurveTo(710.9, 134.4, 734.9, 152.4, 753.9, 159.4);
  ctx.bezierCurveTo(739.9, 161.4, 726.9, 160.4, 715.9, 152.4);
  ctx.bezierCurveTo(729.9, 165.4, 755.9, 170.4, 774.9, 172.4);
  ctx.bezierCurveTo(744.9, 160.4, 712.9, 162.4, 685.9, 144.4);
  ctx.bezierCurveTo(701.9, 171.4, 758.9, 170.4, 784.9, 169.4);
  ctx.bezierCurveTo(762.9, 167.4, 745.9, 168.4, 723.9, 161.4);
  ctx.bezierCurveTo(745.9, 172.4, 788.9, 175.4, 812.9, 166.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(839.9, 132.4);
  ctx.bezierCurveTo(826.9, 139.4, 819.9, 151.4, 808.9, 159.4);
  ctx.bezierCurveTo(793.9, 170.4, 769.9, 175.4, 752.9, 185.4);
  ctx.bezierCurveTo(729.9, 197.4, 702.9, 195.4, 677.9, 195.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(670.9, 198.4);
  ctx.bezierCurveTo(691.9, 198.4, 714.9, 195.4, 734.9, 186.4);
  ctx.bezierCurveTo(744.9, 182.4, 752.9, 174.4, 763.9, 174.4);
  ctx.bezierCurveTo(747.9, 197.4, 701.9, 194.4, 676.9, 198.4);
  ctx.bezierCurveTo(695.9, 200.4, 718.9, 198.4, 737.9, 193.4);
  ctx.bezierCurveTo(755.9, 189.4, 771.9, 179.4, 789.9, 178.4);
  ctx.bezierCurveTo(788.9, 179.4, 787.9, 180.4, 786.9, 181.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(755.9, 195.4);
  ctx.bezierCurveTo(748.9, 196.4, 741.9, 196.4, 735.9, 197.4);
  ctx.bezierCurveTo(765.9, 192.4, 799.9, 180.4, 823.9, 160.4);
  ctx.bezierCurveTo(809.9, 171.4, 790.9, 180.4, 773.9, 186.4);
  ctx.bezierCurveTo(794.9, 171.4, 820.9, 163.4, 841.9, 146.4);
  ctx.bezierCurveTo(817.9, 161.4, 787.9, 168.4, 765.9, 185.4);
  ctx.bezierCurveTo(791.9, 175.4, 818.9, 152.4, 837.9, 132.4);
  ctx.bezierCurveTo(829.9, 145.4, 811.9, 155.4, 799.9, 164.4);
  ctx.bezierCurveTo(812.9, 149.4, 831.9, 139.4, 846.9, 126.4);
  ctx.bezierCurveTo(828.9, 168.4, 784.9, 201.4, 738.9, 196.4);
  ctx.bezierCurveTo(756.9, 181.4, 786.9, 173.4, 808.9, 167.4);
  ctx.bezierCurveTo(796.9, 177.4, 779.9, 187.4, 764.9, 189.4);
  ctx.bezierCurveTo(770.9, 185.4, 776.9, 181.4, 782.9, 178.4);
  ctx.bezierCurveTo(780.9, 182.4, 779.9, 186.4, 774.9, 189.4);
  ctx.bezierCurveTo(790.9, 170.4, 807.9, 141.4, 827.9, 127.4);
  ctx.bezierCurveTo(814.9, 148.4, 799.9, 164.4, 775.9, 171.4);
  ctx.bezierCurveTo(797.9, 154.4, 831.9, 151.4, 850.9, 130.4);
  ctx.bezierCurveTo(835.9, 136.4, 821.9, 144.4, 808.9, 154.4);
  ctx.bezierCurveTo(817.9, 140.4, 830.9, 128.4, 843.9, 118.4);
  ctx.bezierCurveTo(831.9, 129.4, 819.9, 139.4, 806.9, 148.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(704.9, 109.4);
  ctx.bezierCurveTo(728.9, 136.4, 750.9, 143.4, 779.9, 160.4);
  ctx.bezierCurveTo(759.9, 158.4, 739.9, 145.4, 722.9, 136.4);
  ctx.bezierCurveTo(733.9, 152.4, 758.9, 169.4, 778.9, 170.4);
  ctx.bezierCurveTo(770.9, 165.4, 761.9, 163.4, 754.9, 157.4);
  ctx.bezierCurveTo(762.9, 160.4, 771.9, 163.4, 779.9, 167.4);
  ctx.bezierCurveTo(769.9, 161.4, 759.9, 156.4, 749.9, 152.4);
  ctx.bezierCurveTo(761.9, 162.4, 780.9, 166.4, 794.9, 168.4);
  ctx.bezierCurveTo(786.9, 160.4, 772.9, 156.4, 761.9, 151.4);
  ctx.bezierCurveTo(769.9, 154.4, 776.9, 156.4, 784.9, 158.4);
  ctx.bezierCurveTo(755.9, 150.4, 741.9, 122.4, 716.9, 113.4);
  ctx.bezierCurveTo(722.9, 127.4, 740.9, 144.4, 756.9, 146.4);
  ctx.bezierCurveTo(743.9, 135.4, 732.9, 122.4, 721.9, 108.4);
  ctx.bezierCurveTo(730.9, 113.4, 738.9, 120.4, 745.9, 128.4);
  ctx.bezierCurveTo(732.9, 123.4, 720.9, 116.4, 707.9, 112.4);
  ctx.bezierCurveTo(717.9, 123.4, 731.9, 130.4, 743.9, 138.4);
  ctx.bezierCurveTo(737.9, 130.4, 727.9, 126.4, 720.9, 119.4);
  ctx.bezierCurveTo(731.9, 127.4, 739.9, 138.4, 750.9, 147.4);
  ctx.bezierCurveTo(739.9, 138.4, 723.9, 131.4, 714.9, 120.4);
  ctx.bezierCurveTo(735.9, 120.4, 769.9, 151.4, 792.9, 158.4);
  ctx.bezierCurveTo(768.9, 143.4, 746.9, 125.4, 721.9, 111.4);
  ctx.bezierCurveTo(736.9, 122.4, 745.9, 138.4, 758.9, 149.4);
  ctx.bezierCurveTo(771.9, 161.4, 784.9, 161.4, 802.9, 162.4);
  ctx.bezierCurveTo(776.9, 143.4, 737.9, 144.4, 723.9, 110.4);
  ctx.bezierCurveTo(740.9, 120.4, 750.9, 140.4, 770.9, 146.4);
  ctx.bezierCurveTo(743.9, 129.4, 713.9, 120.4, 687.9, 103.4);
  ctx.bezierCurveTo(713.9, 108.4, 739.9, 127.4, 765.9, 136.4);
  ctx.bezierCurveTo(749.9, 125.4, 727.9, 120.4, 714.9, 106.4);
  ctx.bezierCurveTo(720.9, 107.4, 724.9, 108.4, 727.9, 112.4);
  ctx.bezierCurveTo(724.9, 109.4, 722.9, 104.4, 719.9, 101.4);
  ctx.bezierCurveTo(725.9, 103.4, 728.9, 105.4, 730.9, 109.4);
  ctx.bezierCurveTo(730.9, 108.4, 729.9, 107.4, 729.9, 106.4);
  ctx.bezierCurveTo(728.9, 107.4, 728.9, 108.4, 728.9, 109.4);
  ctx.bezierCurveTo(728.9, 109.4, 728.9, 108.4, 728.9, 107.4);
  ctx.bezierCurveTo(728.9, 109.4, 728.9, 112.4, 729.9, 114.4);
  ctx.bezierCurveTo(730.9, 113.4, 730.9, 110.4, 731.9, 109.4);
  ctx.bezierCurveTo(731.9, 109.4, 732.9, 110.4, 732.9, 111.4);
  ctx.bezierCurveTo(732.9, 108.4, 733.9, 105.4, 734.9, 103.4);
  ctx.bezierCurveTo(736.9, 108.4, 738.9, 113.4, 739.9, 118.4);
  ctx.bezierCurveTo(735.9, 110.4, 731.9, 102.4, 727.9, 94.4);
  ctx.bezierCurveTo(728.9, 96.4, 729.9, 99.4, 730.9, 101.4);
  ctx.bezierCurveTo(730.9, 101.4, 729.9, 103.4, 729.9, 100.4);
  ctx.bezierCurveTo(729.9, 102.4, 728.9, 107.4, 728.9, 110.4);
  ctx.bezierCurveTo(726.9, 107.4, 724.9, 104.4, 722.9, 101.4);
  ctx.bezierCurveTo(724.9, 102.4, 727.9, 105.4, 728.9, 106.4);
  ctx.bezierCurveTo(729.9, 105.4, 729.9, 104.4, 730.9, 102.4);
  ctx.bezierCurveTo(731.9, 105.4, 734.9, 108.4, 735.9, 109.4);
  ctx.bezierCurveTo(734.9, 107.4, 734.9, 104.4, 733.9, 102.4);
  ctx.bezierCurveTo(739.9, 107.4, 745.9, 112.4, 752.9, 116.4);
  ctx.bezierCurveTo(748.9, 112.4, 744.9, 109.4, 739.9, 106.4);
  ctx.bezierCurveTo(739.9, 114.4, 743.9, 121.4, 748.9, 128.4);
  ctx.bezierCurveTo(745.9, 125.4, 742.9, 121.4, 739.9, 118.4);
  ctx.bezierCurveTo(758.9, 128.4, 777.9, 138.4, 797.9, 147.4);
  ctx.bezierCurveTo(777.9, 141.4, 757.9, 130.4, 741.9, 117.4);
  ctx.bezierCurveTo(758.9, 127.4, 773.9, 153.4, 793.9, 157.4);
  ctx.bezierCurveTo(789.9, 150.4, 780.9, 146.4, 772.9, 142.4);
  ctx.bezierCurveTo(777.9, 150.4, 788.9, 156.4, 797.9, 159.4);
  ctx.bezierCurveTo(792.9, 152.4, 783.9, 148.4, 776.9, 144.4);
  ctx.bezierCurveTo(785.9, 147.4, 794.9, 151.4, 803.9, 154.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(835.9, 115.4);
  ctx.bezierCurveTo(818.9, 126.4, 808.9, 143.4, 788.9, 151.4);
  ctx.bezierCurveTo(799.9, 135.4, 819.9, 125.4, 832.9, 109.4);
  ctx.bezierCurveTo(819.9, 119.4, 809.9, 130.4, 795.9, 137.4);
  ctx.bezierCurveTo(809.9, 128.4, 821.9, 118.4, 830.9, 105.4);
  ctx.bezierCurveTo(826.9, 126.4, 810.9, 143.4, 797.9, 158.4);
  ctx.bezierCurveTo(809.9, 142.4, 827.9, 130.4, 836.9, 112.4);
  ctx.bezierCurveTo(834.9, 121.4, 828.9, 130.4, 821.9, 137.4);
  ctx.bezierCurveTo(824.9, 128.4, 834.9, 118.4, 840.9, 111.4);
  ctx.bezierCurveTo(841.9, 122.4, 836.9, 134.4, 829.9, 142.4);
  ctx.bezierCurveTo(832.9, 133.4, 839.9, 123.4, 847.9, 118.4);
  ctx.bezierCurveTo(848.9, 125.4, 844.9, 130.4, 839.9, 136.4);
  ctx.bezierCurveTo(845.9, 129.4, 851.9, 122.4, 857.9, 116.4);
  ctx.bezierCurveTo(850.9, 125.4, 840.9, 134.4, 830.9, 140.4);
  ctx.bezierCurveTo(835.9, 133.4, 843.9, 127.4, 848.9, 119.4);
  ctx.bezierCurveTo(836.9, 127.4, 828.9, 140.4, 817.9, 150.4);
  ctx.bezierCurveTo(823.9, 138.4, 832.9, 129.4, 839.9, 118.4);
  ctx.bezierCurveTo(831.9, 128.4, 822.9, 138.4, 812.9, 146.4);
  ctx.bezierCurveTo(812.9, 136.4, 817.9, 126.4, 821.9, 117.4);
  ctx.bezierCurveTo(809.9, 126.4, 795.9, 137.4, 786.9, 151.4);
  ctx.bezierCurveTo(789.9, 142.4, 795.9, 132.4, 803.9, 130.4);
  ctx.bezierCurveTo(804.9, 136.4, 803.9, 142.4, 800.9, 147.4);
  ctx.bezierCurveTo(801.9, 145.4, 803.9, 143.4, 804.9, 140.4);
  ctx.bezierCurveTo(803.9, 142.4, 801.9, 144.4, 800.9, 146.4);
  ctx.bezierCurveTo(801.9, 144.4, 802.9, 142.4, 804.9, 141.4);
  ctx.bezierCurveTo(803.9, 145.4, 801.9, 149.4, 799.9, 153.4);
  ctx.bezierCurveTo(801.9, 146.4, 804.9, 140.4, 808.9, 134.4);
  ctx.bezierCurveTo(806.9, 136.4, 804.9, 139.4, 802.9, 141.4);
  ctx.bezierCurveTo(804.9, 139.4, 805.9, 136.4, 806.9, 134.4);
  ctx.bezierCurveTo(803.9, 140.4, 800.9, 145.4, 795.9, 149.4);
  ctx.bezierCurveTo(794.9, 147.4, 795.9, 146.4, 796.9, 144.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(644.9, 621.4);
  ctx.bezierCurveTo(647.9, 647.4, 644.9, 674.4, 648.9, 699.4);
  ctx.bezierCurveTo(647.9, 698.4, 646.9, 694.4, 646.9, 692.4);
  ctx.bezierCurveTo(646.9, 693.4, 645.9, 697.4, 645.9, 697.4);
  ctx.bezierCurveTo(645.9, 693.4, 645.9, 688.4, 645.9, 684.4);
  ctx.bezierCurveTo(646.9, 689.4, 646.9, 695.4, 646.9, 701.4);
  ctx.bezierCurveTo(646.9, 693.4, 646.9, 686.4, 647.9, 678.4);
  ctx.bezierCurveTo(646.9, 683.4, 644.9, 693.4, 642.9, 700.4);
  ctx.bezierCurveTo(653.9, 700.4, 666.9, 698.4, 677.9, 698.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(648.9, 630.4);
  ctx.bezierCurveTo(646.9, 656.4, 660.9, 680.4, 676.9, 699.4);
  ctx.bezierCurveTo(659.9, 679.4, 654.9, 668.4, 649.9, 644.4);
  ctx.bezierCurveTo(645.9, 661.4, 650.9, 677.4, 649.9, 695.4);
  ctx.bezierCurveTo(649.9, 680.4, 651.9, 666.4, 650.9, 651.4);
  ctx.bezierCurveTo(649.9, 657.4, 649.9, 662.4, 647.9, 668.4);
  ctx.bezierCurveTo(648.9, 661.4, 648.9, 654.4, 648.9, 647.4);
  ctx.bezierCurveTo(650.9, 663.4, 649.9, 679.4, 648.9, 695.4);
  ctx.bezierCurveTo(648.9, 686.4, 649.9, 678.4, 649.9, 669.4);
  ctx.bezierCurveTo(649.9, 677.4, 648.9, 686.4, 648.9, 694.4);
  ctx.bezierCurveTo(648.9, 686.4, 648.9, 677.4, 648.9, 669.4);
  ctx.bezierCurveTo(649.9, 677.4, 649.9, 684.4, 648.9, 692.4);
  ctx.bezierCurveTo(649.9, 686.4, 650.9, 675.4, 650.9, 668.4);
  ctx.bezierCurveTo(651.9, 677.4, 654.9, 687.4, 652.9, 695.4);
  ctx.bezierCurveTo(650.9, 688.4, 649.9, 679.4, 652.9, 672.4);
  ctx.bezierCurveTo(654.9, 680.4, 653.9, 690.4, 653.9, 699.4);
  ctx.bezierCurveTo(651.9, 698.4, 651.9, 696.4, 650.9, 695.4);
  ctx.bezierCurveTo(650.9, 696.4, 649.9, 696.4, 649.9, 697.4);
  ctx.bezierCurveTo(650.9, 696.4, 650.9, 692.4, 651.9, 690.4);
  ctx.lineTo(652.9, 694.4);
  ctx.bezierCurveTo(651.9, 686.4, 651.9, 678.4, 652.9, 670.4);
  ctx.bezierCurveTo(652.9, 679.4, 652.9, 688.4, 654.9, 697.4);
  ctx.bezierCurveTo(652.9, 691.4, 651.9, 685.4, 651.9, 678.4);
  ctx.bezierCurveTo(654.9, 686.4, 653.9, 694.4, 661.9, 698.4);
  ctx.bezierCurveTo(660.9, 692.4, 655.9, 684.4, 654.9, 676.4);
  ctx.bezierCurveTo(654.9, 684.4, 657.9, 691.4, 662.9, 697.4);
  ctx.bezierCurveTo(656.9, 696.4, 655.9, 695.4, 652.9, 691.4);
  ctx.bezierCurveTo(653.9, 692.4, 657.9, 694.4, 658.9, 695.4);
  ctx.bezierCurveTo(660.9, 687.4, 657.9, 678.4, 654.9, 670.4);
  ctx.bezierCurveTo(655.9, 679.4, 657.9, 688.4, 663.9, 695.4);
  ctx.bezierCurveTo(660.9, 688.4, 659.9, 681.4, 659.9, 674.4);
  ctx.bezierCurveTo(661.9, 682.4, 664.9, 688.4, 670.9, 693.4);
  ctx.bezierCurveTo(666.9, 689.4, 662.9, 684.4, 658.9, 680.4);
  ctx.bezierCurveTo(660.9, 685.4, 662.9, 690.4, 665.9, 695.4);
  ctx.bezierCurveTo(661.9, 691.4, 660.9, 686.4, 659.9, 682.4);
  ctx.bezierCurveTo(663.9, 685.4, 667.9, 689.4, 670.9, 694.4);
  ctx.bezierCurveTo(668.9, 692.4, 665.9, 690.4, 662.9, 688.4);
  ctx.bezierCurveTo(664.9, 690.4, 667.9, 694.4, 669.9, 696.4);
  ctx.bezierCurveTo(663.9, 697.4, 657.9, 696.4, 652.9, 697.4);
  ctx.bezierCurveTo(659.9, 699.4, 668.9, 698.4, 675.9, 697.4);
  ctx.bezierCurveTo(674.9, 697.4, 671.9, 695.4, 669.9, 694.4);
  ctx.bezierCurveTo(669.9, 694.4, 670.9, 694.4, 671.9, 694.4);
  ctx.bezierCurveTo(659.9, 680.4, 647.9, 650.4, 649.9, 632.4);
  ctx.bezierCurveTo(649.9, 644.4, 652.9, 655.4, 654.9, 666.4);
  ctx.bezierCurveTo(652.9, 656.4, 651.9, 647.4, 651.9, 637.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(642.9, 551.4);
  ctx.bezierCurveTo(639.9, 576.4, 637.9, 598.4, 643.9, 622.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(648.9, 625.4);
  ctx.bezierCurveTo(648.9, 600.4, 644.9, 574.4, 646.9, 549.4);
  ctx.bezierCurveTo(643.9, 574.4, 646.9, 602.4, 649.9, 628.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(819.9, 108.4);
  ctx.bezierCurveTo(826.9, 120.4, 800.9, 140.4, 789.9, 143.4);
  ctx.bezierCurveTo(791.9, 132.4, 803.9, 125.4, 810.9, 117.4);
  ctx.bezierCurveTo(788.9, 132.4, 763.9, 141.4, 739.9, 154.4);
  ctx.bezierCurveTo(763.9, 143.4, 787.9, 130.4, 811.9, 120.4);
  ctx.bezierCurveTo(808.9, 122.4, 806.9, 124.4, 804.9, 126.4);
  ctx.bezierCurveTo(811.9, 121.4, 819.9, 116.4, 827.9, 112.4);
  ctx.bezierCurveTo(810.9, 124.4, 791.9, 134.4, 774.9, 145.4);
  ctx.bezierCurveTo(785.9, 138.4, 797.9, 128.4, 810.9, 125.4);
  ctx.bezierCurveTo(800.9, 137.4, 778.9, 143.4, 762.9, 144.4);
  ctx.bezierCurveTo(772.9, 128.4, 799.9, 122.4, 814.9, 111.4);
  ctx.bezierCurveTo(801.9, 112.4, 787.9, 117.4, 775.9, 123.4);
  ctx.bezierCurveTo(791.9, 120.4, 808.9, 116.4, 824.9, 114.4);
  ctx.bezierCurveTo(812.9, 121.4, 799.9, 125.4, 787.9, 133.4);
  ctx.bezierCurveTo(796.9, 130.4, 805.9, 127.4, 813.9, 123.4);
  ctx.bezierCurveTo(795.9, 127.4, 778.9, 132.4, 760.9, 135.4);
  ctx.bezierCurveTo(779.9, 123.4, 807.9, 117.4, 829.9, 113.4);
  ctx.bezierCurveTo(808.9, 119.4, 787.9, 124.4, 767.9, 134.4);
  ctx.bezierCurveTo(792.9, 128.4, 818.9, 118.4, 841.9, 108.4);
  ctx.bezierCurveTo(830.9, 107.4, 817.9, 115.4, 805.9, 118.4);
  ctx.bezierCurveTo(811.9, 115.4, 817.9, 112.4, 823.9, 109.4);
  ctx.bezierCurveTo(807.9, 112.4, 791.9, 116.4, 777.9, 123.4);
  ctx.bezierCurveTo(799.9, 119.4, 822.9, 111.4, 844.9, 104.4);
  ctx.bezierCurveTo(829.9, 108.4, 813.9, 114.4, 798.9, 120.4);
  ctx.bezierCurveTo(813.9, 116.4, 828.9, 111.4, 843.9, 108.4);
  ctx.bezierCurveTo(819.9, 117.4, 795.9, 124.4, 771.9, 134.4);
  ctx.bezierCurveTo(776.9, 132.4, 781.9, 131.4, 786.9, 130.4);
  ctx.bezierCurveTo(768.9, 134.4, 750.9, 138.4, 733.9, 141.4);
  ctx.bezierCurveTo(751.9, 133.4, 771.9, 130.4, 789.9, 123.4);
  ctx.bezierCurveTo(781.9, 124.4, 773.9, 126.4, 765.9, 128.4);
  ctx.bezierCurveTo(776.9, 126.4, 787.9, 124.4, 797.9, 120.4);
  ctx.bezierCurveTo(795.9, 120.4, 793.9, 121.4, 791.9, 121.4);
  ctx.bezierCurveTo(801.9, 118.4, 810.9, 116.4, 820.9, 113.4);
  ctx.bezierCurveTo(810.9, 109.4, 795.9, 112.4, 785.9, 115.4);
  ctx.bezierCurveTo(789.9, 114.4, 793.9, 114.4, 797.9, 113.4);
  ctx.bezierCurveTo(794.9, 116.4, 793.9, 121.4, 790.9, 123.4);
  ctx.bezierCurveTo(800.9, 126.4, 811.9, 125.4, 822.9, 124.4);
  ctx.bezierCurveTo(803.9, 125.4, 783.9, 127.4, 764.9, 129.4);
  ctx.bezierCurveTo(776.9, 129.4, 789.9, 128.4, 801.9, 129.4);
  ctx.bezierCurveTo(794.9, 131.4, 787.9, 133.4, 782.9, 138.4);
  ctx.bezierCurveTo(792.9, 141.4, 802.9, 139.4, 812.9, 139.4);
  ctx.bezierCurveTo(812.9, 141.4, 811.9, 143.4, 811.9, 145.4);
  ctx.bezierCurveTo(821.9, 143.4, 832.9, 131.4, 843.9, 134.4);
  ctx.bezierCurveTo(843.9, 150.4, 818.9, 154.4, 808.9, 162.4);
  ctx.bezierCurveTo(813.9, 157.4, 818.9, 152.4, 823.9, 148.4);
  ctx.bezierCurveTo(821.9, 151.4, 818.9, 154.4, 816.9, 156.4);
  ctx.bezierCurveTo(820.9, 149.4, 825.9, 143.4, 830.9, 138.4);
  ctx.bezierCurveTo(825.9, 143.4, 820.9, 147.4, 814.9, 147.4);
  ctx.bezierCurveTo(816.9, 143.4, 816.9, 137.4, 818.9, 132.4);
  ctx.bezierCurveTo(810.9, 129.4, 800.9, 132.4, 792.9, 133.4);
  ctx.bezierCurveTo(795.9, 134.4, 798.9, 135.4, 801.9, 135.4);
  ctx.bezierCurveTo(785.9, 136.4, 768.9, 133.4, 752.9, 131.4);
  ctx.bezierCurveTo(773.9, 129.4, 793.9, 132.4, 813.9, 133.4);
  ctx.bezierCurveTo(802.9, 130.4, 791.9, 128.4, 780.9, 123.4);
  ctx.bezierCurveTo(784.9, 126.4, 790.9, 128.4, 795.9, 130.4);
  ctx.bezierCurveTo(776.9, 126.4, 757.9, 122.4, 739.9, 117.4);
  ctx.bezierCurveTo(751.9, 119.4, 764.9, 123.4, 777.9, 124.4);
  ctx.bezierCurveTo(769.9, 118.4, 759.9, 116.4, 751.9, 112.4);
  ctx.bezierCurveTo(765.9, 116.4, 779.9, 122.4, 794.9, 125.4);
  ctx.bezierCurveTo(780.9, 117.4, 764.9, 116.4, 749.9, 111.4);
  ctx.bezierCurveTo(758.9, 115.4, 767.9, 119.4, 776.9, 122.4);
  ctx.bezierCurveTo(770.9, 119.4, 762.9, 115.4, 756.9, 111.4);
  ctx.bezierCurveTo(762.9, 115.4, 770.9, 117.4, 777.9, 119.4);
  ctx.bezierCurveTo(764.9, 117.4, 751.9, 114.4, 738.9, 114.4);
  ctx.bezierCurveTo(750.9, 120.4, 764.9, 123.4, 777.9, 125.4);
  ctx.bezierCurveTo(771.9, 124.4, 764.9, 122.4, 758.9, 119.4);
  ctx.bezierCurveTo(764.9, 124.4, 771.9, 128.4, 778.9, 130.4);
  ctx.bezierCurveTo(768.9, 124.4, 758.9, 120.4, 748.9, 115.4);
  ctx.bezierCurveTo(757.9, 120.4, 767.9, 124.4, 777.9, 126.4);
  ctx.bezierCurveTo(771.9, 121.4, 764.9, 117.4, 757.9, 113.4);
  ctx.bezierCurveTo(767.9, 120.4, 778.9, 125.4, 789.9, 127.4);
  ctx.bezierCurveTo(774.9, 124.4, 761.9, 117.4, 747.9, 111.4);
  ctx.bezierCurveTo(754.9, 116.4, 762.9, 120.4, 769.9, 124.4);
  ctx.bezierCurveTo(768.9, 123.4, 766.9, 123.4, 764.9, 122.4);
  ctx.bezierCurveTo(771.9, 127.4, 778.9, 132.4, 785.9, 137.4);
  ctx.bezierCurveTo(765.9, 133.4, 745.9, 123.4, 727.9, 114.4);
  ctx.bezierCurveTo(740.9, 117.4, 753.9, 122.4, 766.9, 124.4);
  ctx.bezierCurveTo(761.9, 116.4, 750.9, 110.4, 744.9, 102.4);
  ctx.bezierCurveTo(751.9, 106.4, 759.9, 110.4, 767.9, 114.4);
  ctx.bezierCurveTo(757.9, 110.4, 746.9, 108.4, 736.9, 104.4);
  ctx.bezierCurveTo(744.9, 108.4, 753.9, 112.4, 762.9, 113.4);
  ctx.bezierCurveTo(755.9, 107.4, 747.9, 103.4, 740.9, 97.4);
  ctx.bezierCurveTo(748.9, 99.4, 756.9, 102.4, 763.9, 106.4);
  ctx.bezierCurveTo(747.9, 102.4, 730.9, 97.4, 714.9, 94.4);
  ctx.bezierCurveTo(736.9, 103.4, 761.9, 108.4, 784.9, 111.4);
  ctx.bezierCurveTo(778.9, 109.4, 771.9, 107.4, 764.9, 104.4);
  ctx.bezierCurveTo(775.9, 108.4, 787.9, 111.4, 799.9, 113.4);
  ctx.bezierCurveTo(785.9, 109.4, 771.9, 107.4, 758.9, 104.4);
  ctx.bezierCurveTo(774.9, 107.4, 790.9, 110.4, 806.9, 112.4);
  ctx.bezierCurveTo(793.9, 109.4, 779.9, 108.4, 766.9, 104.4);
  ctx.bezierCurveTo(775.9, 104.4, 783.9, 106.4, 792.9, 108.4);
  ctx.bezierCurveTo(783.9, 105.4, 774.9, 103.4, 765.9, 103.4);
  ctx.bezierCurveTo(771.9, 106.4, 777.9, 108.4, 783.9, 108.4);
  ctx.bezierCurveTo(770.9, 100.4, 756.9, 95.4, 742.9, 88.4);
  ctx.bezierCurveTo(756.9, 94.4, 770.9, 100.4, 785.9, 105.4);
  ctx.bezierCurveTo(778.9, 103.4, 771.9, 100.4, 763.9, 98.4);
  ctx.bezierCurveTo(775.9, 105.4, 789.9, 109.4, 802.9, 112.4);
  ctx.bezierCurveTo(785.9, 106.4, 768.9, 103.4, 751.9, 97.4);
  ctx.bezierCurveTo(758.9, 99.4, 766.9, 101.4, 773.9, 103.4);
  ctx.bezierCurveTo(769.9, 101.4, 765.9, 99.4, 761.9, 97.4);
  ctx.bezierCurveTo(780.9, 105.4, 798.9, 113.4, 818.9, 119.4);
  ctx.bezierCurveTo(807.9, 113.4, 795.9, 110.4, 784.9, 106.4);
  ctx.bezierCurveTo(789.9, 104.4, 796.9, 105.4, 802.9, 106.4);
  ctx.bezierCurveTo(792.9, 104.4, 782.9, 103.4, 772.9, 102.4);
  ctx.bezierCurveTo(782.9, 105.4, 791.9, 104.4, 800.9, 107.4);
  ctx.bezierCurveTo(797.9, 108.4, 794.9, 110.4, 791.9, 111.4);
  ctx.bezierCurveTo(799.9, 111.4, 807.9, 111.4, 815.9, 110.4);
  ctx.bezierCurveTo(814.9, 110.4, 812.9, 109.4, 811.9, 109.4);
  ctx.bezierCurveTo(811.9, 109.4, 807.9, 112.4, 805.9, 113.4);
  ctx.bezierCurveTo(812.9, 110.4, 818.9, 107.4, 825.9, 105.4);
  ctx.bezierCurveTo(819.9, 107.4, 813.9, 109.4, 807.9, 111.4);
  ctx.bezierCurveTo(810.9, 109.4, 813.9, 107.4, 816.9, 105.4);
  ctx.bezierCurveTo(802.9, 108.4, 790.9, 118.4, 775.9, 117.4);
  ctx.bezierCurveTo(780.9, 117.4, 785.9, 117.4, 790.9, 116.4);
  ctx.bezierCurveTo(784.9, 116.4, 779.9, 115.4, 773.9, 115.4);
  ctx.bezierCurveTo(778.9, 118.4, 784.9, 120.4, 789.9, 120.4);
  ctx.bezierCurveTo(780.9, 115.4, 769.9, 112.4, 760.9, 108.4);
  ctx.bezierCurveTo(773.9, 108.4, 785.9, 111.4, 798.9, 112.4);
  ctx.bezierCurveTo(786.9, 106.4, 773.9, 103.4, 760.9, 99.4);
  ctx.bezierCurveTo(770.9, 103.4, 781.9, 106.4, 791.9, 107.4);
  ctx.bezierCurveTo(784.9, 106.4, 776.9, 104.4, 769.9, 103.4);
  ctx.bezierCurveTo(775.9, 102.4, 781.9, 102.4, 787.9, 102.4);
  ctx.bezierCurveTo(781.9, 100.4, 774.9, 98.4, 767.9, 95.4);
  ctx.bezierCurveTo(769.9, 95.4, 771.9, 95.4, 773.9, 95.4);
  ctx.bezierCurveTo(769.9, 92.4, 765.9, 89.4, 761.9, 87.4);
  ctx.bezierCurveTo(764.9, 88.4, 767.9, 89.4, 770.9, 90.4);
  ctx.bezierCurveTo(768.9, 91.4, 765.9, 90.4, 763.9, 90.4);
  ctx.bezierCurveTo(764.9, 90.4, 768.9, 91.4, 768.9, 92.4);
  ctx.bezierCurveTo(761.9, 88.4, 754.9, 84.4, 747.9, 81.4);
  ctx.bezierCurveTo(752.9, 86.4, 758.9, 89.4, 765.9, 91.4);
  ctx.bezierCurveTo(756.9, 87.4, 746.9, 84.4, 737.9, 80.4);
  ctx.bezierCurveTo(747.9, 85.4, 757.9, 90.4, 767.9, 93.4);
  ctx.bezierCurveTo(753.9, 83.4, 737.9, 76.4, 722.9, 68.4);
  ctx.bezierCurveTo(740.9, 77.4, 760.9, 92.4, 781.9, 96.4);
  ctx.bezierCurveTo(763.9, 85.4, 740.9, 82.4, 720.9, 76.4);
  ctx.bezierCurveTo(734.9, 83.4, 748.9, 90.4, 761.9, 98.4);
  ctx.bezierCurveTo(742.9, 99.4, 725.9, 94.4, 707.9, 93.4);
  ctx.bezierCurveTo(721.9, 100.4, 738.9, 103.4, 753.9, 106.4);
  ctx.bezierCurveTo(747.9, 105.4, 741.9, 104.4, 734.9, 104.4);
  ctx.bezierCurveTo(740.9, 106.4, 747.9, 108.4, 753.9, 110.4);
  ctx.bezierCurveTo(733.9, 105.4, 712.9, 94.4, 692.9, 93.4);
  ctx.bezierCurveTo(696.9, 98.4, 701.9, 103.4, 707.9, 107.4);
  ctx.bezierCurveTo(685.9, 100.4, 664.9, 89.4, 644.9, 79.4);
  ctx.bezierCurveTo(681.9, 94.4, 713.9, 104.4, 753.9, 108.4);
  ctx.bezierCurveTo(727.9, 108.4, 690.9, 94.4, 666.9, 102.4);
  ctx.bezierCurveTo(657.9, 105.4, 653.9, 114.4, 641.9, 116.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(529.9, 235.4);
  ctx.bezierCurveTo(541.9, 208.4, 566.9, 188.4, 570.9, 157.4);
  ctx.bezierCurveTo(574.9, 179.4, 560.9, 208.4, 544.9, 223.4);
  ctx.bezierCurveTo(561.9, 199.4, 579.9, 175.4, 596.9, 151.4);
  ctx.bezierCurveTo(595.9, 162.4, 587.9, 175.4, 581.9, 184.4);
  ctx.bezierCurveTo(583.9, 166.4, 585.9, 147.4, 586.9, 129.4);
  ctx.bezierCurveTo(584.9, 146.4, 581.9, 164.4, 574.9, 181.4);
  ctx.bezierCurveTo(568.9, 153.4, 568.9, 123.4, 564.9, 95.4);
  ctx.bezierCurveTo(567.9, 115.4, 569.9, 136.4, 570.9, 157.4);
  ctx.bezierCurveTo(570.9, 154.4, 570.9, 150.4, 570.9, 147.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(629.9, 119.4);
  ctx.bezierCurveTo(640.9, 101.4, 644.9, 114.4, 657.9, 118.4);
  ctx.bezierCurveTo(656.9, 116.4, 656.9, 109.4, 654.9, 105.4);
  ctx.bezierCurveTo(681.9, 109.4, 706.9, 118.4, 733.9, 116.4);
  ctx.bezierCurveTo(717.9, 106.4, 699.9, 98.4, 683.9, 90.4);
  ctx.bezierCurveTo(690.9, 94.4, 697.9, 97.4, 704.9, 101.4);
  ctx.bezierCurveTo(694.9, 96.4, 681.9, 91.4, 673.9, 82.4);
  ctx.bezierCurveTo(695.9, 82.4, 719.9, 82.4, 740.9, 84.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(831.9, 91.4);
  ctx.bezierCurveTo(834.9, 89.4, 852.9, 97.4, 860.9, 99.4);
  ctx.bezierCurveTo(831.9, 89.4, 802.9, 79.4, 775.9, 65.4);
  ctx.bezierCurveTo(789.9, 76.4, 810.9, 88.4, 821.9, 103.4);
  ctx.bezierCurveTo(806.9, 100.4, 793.9, 93.4, 779.9, 90.4);
  ctx.bezierCurveTo(804.9, 107.4, 835.9, 115.4, 864.9, 122.4);
  ctx.bezierCurveTo(859.9, 121.4, 854.9, 121.4, 848.9, 119.4);
  ctx.bezierCurveTo(855.9, 119.4, 861.9, 120.4, 867.9, 121.4);
  ctx.bezierCurveTo(864.9, 121.4, 861.9, 121.4, 859.9, 121.4);
  ctx.bezierCurveTo(859.9, 120.4, 864.9, 120.4, 863.9, 120.4);
  ctx.bezierCurveTo(855.9, 118.4, 846.9, 118.4, 838.9, 117.4);
  ctx.bezierCurveTo(844.9, 114.4, 852.9, 112.4, 859.9, 111.4);
  ctx.bezierCurveTo(860.9, 113.4, 862.9, 116.4, 863.9, 117.4);
  ctx.bezierCurveTo(863.9, 115.4, 863.9, 112.4, 862.9, 110.4);
  ctx.bezierCurveTo(868.9, 112.4, 874.9, 114.4, 881.9, 115.4);
  ctx.bezierCurveTo(877.9, 113.4, 873.9, 109.4, 870.9, 107.4);
  ctx.bezierCurveTo(878.9, 108.4, 886.9, 111.4, 894.9, 112.4);
  ctx.bezierCurveTo(888.9, 109.4, 882.9, 107.4, 876.9, 105.4);
  ctx.bezierCurveTo(880.9, 106.4, 885.9, 108.4, 889.9, 109.4);
  ctx.bezierCurveTo(880.9, 107.4, 870.9, 104.4, 861.9, 102.4);
  ctx.bezierCurveTo(879.9, 111.4, 899.9, 118.4, 917.9, 126.4);
  ctx.bezierCurveTo(900.9, 125.4, 882.9, 122.4, 865.9, 118.4);
  ctx.bezierCurveTo(874.9, 121.4, 884.9, 124.4, 894.9, 124.4);
  ctx.bezierCurveTo(875.9, 111.4, 850.9, 108.4, 831.9, 92.4);
  ctx.bezierCurveTo(848.9, 87.4, 879.9, 103.4, 897.9, 106.4);
  ctx.bezierCurveTo(884.9, 97.4, 870.9, 88.4, 857.9, 79.4);
  ctx.bezierCurveTo(872.9, 90.4, 889.9, 100.4, 905.9, 110.4);
  ctx.bezierCurveTo(901.9, 102.4, 896.9, 95.4, 892.9, 88.4);
  ctx.bezierCurveTo(900.9, 95.4, 908.9, 103.4, 917.9, 109.4);
  ctx.bezierCurveTo(916.9, 97.4, 906.9, 82.4, 899.9, 72.4);
  ctx.bezierCurveTo(904.9, 95.4, 909.9, 119.4, 914.9, 142.4);
  ctx.bezierCurveTo(914.9, 125.4, 911.9, 106.4, 914.9, 89.4);
  ctx.bezierCurveTo(915.9, 93.4, 916.9, 96.4, 917.9, 100.4);
  ctx.bezierCurveTo(916.9, 96.4, 917.9, 92.4, 916.9, 88.4);
  ctx.bezierCurveTo(922.9, 100.4, 925.9, 113.4, 932.9, 123.4);
  ctx.bezierCurveTo(936.9, 103.4, 932.9, 82.4, 933.9, 61.4);
  ctx.bezierCurveTo(937.9, 75.4, 938.9, 91.4, 940.9, 105.4);
  ctx.bezierCurveTo(940.9, 96.4, 938.9, 87.4, 938.9, 78.4);
  ctx.bezierCurveTo(939.9, 78.4, 940.9, 78.4, 941.9, 78.4);
  ctx.bezierCurveTo(935.9, 67.4, 927.9, 58.4, 921.9, 47.4);
  ctx.bezierCurveTo(925.9, 51.4, 929.9, 55.4, 933.9, 60.4);
  ctx.bezierCurveTo(930.9, 58.4, 928.9, 56.4, 926.9, 54.4);
  ctx.bezierCurveTo(932.9, 61.4, 938.9, 68.4, 942.9, 76.4);
  ctx.bezierCurveTo(935.9, 83.4, 937.9, 107.4, 938.9, 117.4);
  ctx.bezierCurveTo(934.9, 106.4, 886.9, 96.4, 879.9, 97.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(780.9, 96.4);
  ctx.bezierCurveTo(766.9, 86.4, 750.9, 82.4, 732.9, 79.4);
  ctx.bezierCurveTo(712.9, 77.4, 693.9, 66.4, 676.9, 50.4);
  ctx.bezierCurveTo(694.9, 60.4, 711.9, 63.4, 729.9, 71.4);
  ctx.bezierCurveTo(677.9, 76.4, 629.9, 43.4, 582.9, 39.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(681.9, 66.4);
  ctx.bezierCurveTo(685.9, 66.4, 684.9, 65.4, 679.9, 65.4);
  ctx.bezierCurveTo(669.9, 63.4, 658.9, 62.4, 648.9, 61.4);
  ctx.bezierCurveTo(635.9, 59.4, 622.9, 55.4, 609.9, 53.4);
  ctx.bezierCurveTo(622.9, 67.4, 643.9, 73.4, 659.9, 80.4);
  ctx.bezierCurveTo(637.9, 81.4, 615.9, 75.4, 593.9, 77.4);
  ctx.bezierCurveTo(610.9, 91.4, 639.9, 88.4, 660.9, 97.4);
  ctx.bezierCurveTo(647.9, 104.4, 632.9, 106.4, 619.9, 108.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(606.9, 112.4);
  ctx.bezierCurveTo(610.9, 118.4, 610.9, 124.4, 607.9, 129.4);
  ctx.bezierCurveTo(607.9, 122.4, 611.9, 115.4, 614.9, 109.4);
  ctx.bezierCurveTo(605.9, 109.4, 595.9, 119.4, 591.9, 118.4);
  ctx.bezierCurveTo(592.9, 135.4, 581.9, 149.4, 579.9, 166.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(580.9, 152.4);
  ctx.bezierCurveTo(577.9, 157.4, 574.9, 168.4, 569.9, 165.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(569.9, 120.4);
  ctx.bezierCurveTo(558.9, 140.4, 552.9, 161.4, 550.9, 184.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(549.9, 194.4);
  ctx.bezierCurveTo(546.9, 199.4, 543.9, 205.4, 540.9, 209.4);
  ctx.bezierCurveTo(529.9, 184.4, 540.9, 153.4, 560.9, 137.4);
  ctx.bezierCurveTo(549.9, 154.4, 527.9, 187.4, 532.9, 207.4);
  ctx.bezierCurveTo(534.9, 201.4, 536.9, 194.4, 536.9, 188.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(930.9, 64.4);
  ctx.bezierCurveTo(932.9, 64.4, 934.9, 65.4, 934.9, 66.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(879.9, 68.4);
  ctx.bezierCurveTo(832.9, 62.4, 778.9, 46.4, 731.9, 55.4);
  ctx.bezierCurveTo(788.9, 62.4, 845.9, 57.4, 900.9, 73.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(795.9, 42.4);
  ctx.bezierCurveTo(793.9, 39.4, 809.9, 44.4, 814.9, 45.4);
  ctx.bezierCurveTo(829.9, 48.4, 842.9, 51.4, 856.9, 59.4);
  ctx.bezierCurveTo(821.9, 44.4, 775.9, 26.4, 736.9, 27.4);
  ctx.bezierCurveTo(723.9, 27.4, 710.9, 33.4, 697.9, 34.4);
  ctx.bezierCurveTo(751.9, 36.4, 805.9, 36.4, 857.9, 49.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(770.9, 50.4);
  ctx.bezierCurveTo(745.9, 49.4, 720.9, 48.4, 695.9, 46.4);
  ctx.bezierCurveTo(720.9, 46.4, 747.9, 47.4, 772.9, 52.4);
  ctx.bezierCurveTo(746.9, 58.4, 717.9, 53.4, 692.9, 53.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(660.9, 50.4);
  ctx.bezierCurveTo(652.9, 53.4, 643.9, 56.4, 635.9, 59.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(929.9, 157.4);
  ctx.bezierCurveTo(932.9, 160.4, 935.9, 164.4, 938.9, 167.4);
  ctx.bezierCurveTo(922.9, 162.4, 904.9, 148.4, 898.9, 132.4);
  ctx.bezierCurveTo(909.9, 135.4, 921.9, 149.4, 932.9, 157.4);
  ctx.bezierCurveTo(925.9, 153.4, 919.9, 149.4, 912.9, 145.4);
  ctx.bezierCurveTo(918.9, 153.4, 923.9, 159.4, 928.9, 167.4);
  ctx.bezierCurveTo(917.9, 160.4, 907.9, 149.4, 900.9, 138.4);
  ctx.bezierCurveTo(904.9, 140.4, 908.9, 141.4, 911.9, 143.4);
  ctx.bezierCurveTo(901.9, 139.4, 891.9, 136.4, 881.9, 132.4);
  ctx.bezierCurveTo(891.9, 135.4, 900.9, 139.4, 909.9, 142.4);
  ctx.bezierCurveTo(908.9, 141.4, 908.9, 140.4, 908.9, 139.4);
  ctx.bezierCurveTo(915.9, 145.4, 921.9, 151.4, 927.9, 157.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(936.9, 177.4);
  ctx.bezierCurveTo(940.9, 183.4, 944.9, 190.4, 948.9, 196.4);
  ctx.bezierCurveTo(945.9, 191.4, 942.9, 186.4, 940.9, 181.4);
  ctx.bezierCurveTo(942.9, 186.4, 941.9, 190.4, 941.9, 194.4);
  ctx.bezierCurveTo(938.9, 191.4, 938.9, 191.4, 936.9, 187.4);
  ctx.bezierCurveTo(937.9, 188.4, 941.9, 191.4, 943.9, 193.4);
  ctx.bezierCurveTo(941.9, 188.4, 940.9, 182.4, 939.9, 177.4);
  ctx.bezierCurveTo(941.9, 180.4, 943.9, 184.4, 944.9, 188.4);
  ctx.bezierCurveTo(939.9, 183.4, 935.9, 178.4, 932.9, 172.4);
  ctx.bezierCurveTo(937.9, 177.4, 940.9, 184.4, 943.9, 190.4);
  ctx.bezierCurveTo(942.9, 186.4, 941.9, 182.4, 940.9, 178.4);
  ctx.bezierCurveTo(941.9, 184.4, 943.9, 191.4, 944.9, 197.4);
  ctx.bezierCurveTo(943.9, 196.4, 942.9, 195.4, 940.9, 194.4);
  ctx.bezierCurveTo(942.9, 197.4, 944.9, 200.4, 946.9, 203.4);
  ctx.bezierCurveTo(945.9, 202.4, 945.9, 201.4, 944.9, 200.4);
  ctx.bezierCurveTo(945.9, 200.4, 948.9, 201.4, 949.9, 200.4);
  ctx.bezierCurveTo(947.9, 193.4, 943.9, 187.4, 942.9, 180.4);
  ctx.bezierCurveTo(951.9, 187.4, 957.9, 197.4, 964.9, 207.4);
  ctx.bezierCurveTo(963.9, 199.4, 958.9, 192.4, 955.9, 185.4);
  ctx.bezierCurveTo(960.9, 191.4, 964.9, 198.4, 969.9, 205.4);
  ctx.bezierCurveTo(967.9, 203.4, 964.9, 200.4, 962.9, 198.4);
  ctx.bezierCurveTo(964.9, 205.4, 966.9, 211.4, 968.9, 217.4);
  ctx.bezierCurveTo(961.9, 211.4, 954.9, 205.4, 947.9, 198.4);
  ctx.bezierCurveTo(954.9, 205.4, 960.9, 212.4, 967.9, 217.4);
  ctx.bezierCurveTo(964.9, 210.4, 960.9, 203.4, 955.9, 197.4);
  ctx.bezierCurveTo(958.9, 202.4, 962.9, 207.4, 965.9, 212.4);
  ctx.bezierCurveTo(962.9, 207.4, 959.9, 203.4, 955.9, 199.4);
  ctx.bezierCurveTo(958.9, 203.4, 962.9, 206.4, 965.9, 209.4);
  ctx.bezierCurveTo(961.9, 202.4, 956.9, 197.4, 950.9, 192.4);
  ctx.bezierCurveTo(952.9, 194.4, 954.9, 197.4, 956.9, 200.4);
  ctx.bezierCurveTo(952.9, 196.4, 948.9, 193.4, 944.9, 189.4);
  ctx.bezierCurveTo(949.9, 193.4, 954.9, 197.4, 958.9, 201.4);
  ctx.bezierCurveTo(954.9, 196.4, 949.9, 191.4, 945.9, 186.4);
  ctx.bezierCurveTo(947.9, 190.4, 949.9, 194.4, 952.9, 197.4);
  ctx.bezierCurveTo(944.9, 193.4, 937.9, 187.4, 932.9, 180.4);
  ctx.bezierCurveTo(937.9, 182.4, 942.9, 185.4, 946.9, 189.4);
  ctx.bezierCurveTo(946.9, 189.4, 946.9, 188.4, 946.9, 187.4);
  ctx.bezierCurveTo(951.9, 194.4, 956.9, 202.4, 961.9, 209.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(995.9, 385.4);
  ctx.bezierCurveTo(998.9, 376.4, 1009.9, 372.4, 1016.9, 367.4);
  ctx.bezierCurveTo(1014.9, 366.4, 1013.9, 363.4, 1012.9, 362.4);
  ctx.bezierCurveTo(1015.9, 361.4, 1017.9, 357.4, 1020.9, 356.4);
  ctx.bezierCurveTo(1017.9, 350.4, 1046.9, 309.4, 1027.9, 310.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(1017.9, 317.4);
  ctx.bezierCurveTo(1014.9, 317.4, 1013.9, 317.4, 1013.9, 315.4);
  ctx.bezierCurveTo(1012.9, 315.4, 1012.9, 316.4, 1011.9, 316.4);
  ctx.bezierCurveTo(1011.9, 313.4, 1010.9, 309.4, 1010.9, 306.4);
  ctx.bezierCurveTo(1010.9, 308.4, 1010.9, 309.4, 1010.9, 311.4);
  ctx.bezierCurveTo(1009.9, 311.4, 1008.9, 310.4, 1007.9, 311.4);
  ctx.bezierCurveTo(1007.9, 312.4, 1007.9, 313.4, 1006.9, 314.4);
  ctx.bezierCurveTo(1005.9, 314.4, 1002.9, 313.4, 1001.9, 312.4);
  ctx.bezierCurveTo(1001.9, 315.4, 1001.9, 317.4, 1001.9, 321.4);
  ctx.bezierCurveTo(1000.9, 318.4, 999.9, 316.4, 999.9, 314.4);
  ctx.bezierCurveTo(1000.9, 316.4, 1001.9, 318.4, 1003.9, 320.4);
  ctx.bezierCurveTo(1002.9, 316.4, 1004.9, 310.4, 1005.9, 306.4);
  ctx.bezierCurveTo(1006.9, 308.4, 1007.9, 310.4, 1008.9, 312.4);
  ctx.bezierCurveTo(1007.9, 311.4, 1003.9, 308.4, 1002.9, 308.4);
  ctx.bezierCurveTo(1003.9, 310.4, 1004.9, 313.4, 1005.9, 316.4);
  ctx.bezierCurveTo(1005.9, 315.4, 1006.9, 314.4, 1006.9, 313.4);
  ctx.bezierCurveTo(1006.9, 315.4, 1006.9, 317.4, 1006.9, 319.4);
  ctx.bezierCurveTo(1005.9, 316.4, 1004.9, 313.4, 1003.9, 309.4);
  ctx.bezierCurveTo(1003.9, 311.4, 1005.9, 315.4, 1005.9, 318.4);
  ctx.bezierCurveTo(1014.9, 302.4, 1001.9, 299.4, 989.9, 300.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(1013.9, 299.4);
  ctx.bezierCurveTo(1012.9, 301.4, 1014.9, 300.4, 1014.9, 297.4);
  ctx.bezierCurveTo(1014.9, 300.4, 1014.9, 304.4, 1014.9, 307.4);
  ctx.bezierCurveTo(1014.9, 304.4, 1015.9, 301.4, 1015.9, 298.4);
  ctx.bezierCurveTo(1016.9, 302.4, 1015.9, 305.4, 1015.9, 310.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(1014.9, 297.4);
  ctx.bezierCurveTo(1015.9, 301.4, 1016.9, 305.4, 1016.9, 309.4);
  ctx.bezierCurveTo(1016.9, 306.4, 1016.9, 303.4, 1016.9, 301.4);
  ctx.bezierCurveTo(1016.9, 303.4, 1017.9, 306.4, 1017.9, 309.4);
  ctx.bezierCurveTo(1017.9, 306.4, 1017.9, 302.4, 1016.9, 299.4);
  ctx.bezierCurveTo(1019.9, 304.4, 1019.9, 310.4, 1017.9, 315.4);
  ctx.bezierCurveTo(1016.9, 316.4, 1016.9, 312.4, 1016.9, 311.4);
  ctx.bezierCurveTo(1016.9, 313.4, 1016.9, 316.4, 1015.9, 317.4);
  ctx.bezierCurveTo(1015.9, 314.4, 1014.9, 311.4, 1014.9, 307.4);
  ctx.bezierCurveTo(1013.9, 310.4, 1013.9, 310.4, 1013.9, 312.4);
  ctx.bezierCurveTo(1007.9, 303.4, 1001.9, 294.4, 987.9, 300.4);
  ctx.bezierCurveTo(991.9, 299.4, 994.9, 299.4, 997.9, 298.4);
  ctx.bezierCurveTo(989.9, 298.4, 980.9, 298.4, 973.9, 299.4);
  ctx.bezierCurveTo(982.9, 305.4, 998.9, 298.4, 1009.9, 299.4);
  ctx.bezierCurveTo(1005.9, 300.4, 1002.9, 300.4, 998.9, 299.4);
  ctx.bezierCurveTo(1002.9, 298.4, 1006.9, 298.4, 1010.9, 297.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(1004.9, 297.4);
  ctx.bezierCurveTo(1011.9, 297.4, 1015.9, 295.4, 1012.9, 303.4);
  ctx.bezierCurveTo(1011.9, 300.4, 1008.9, 298.4, 1006.9, 294.4);
  ctx.bezierCurveTo(1007.9, 297.4, 1008.9, 303.4, 1008.9, 305.4);
  ctx.bezierCurveTo(1011.9, 302.4, 1010.9, 305.4, 1012.9, 306.4);
  ctx.bezierCurveTo(1009.9, 304.4, 1007.9, 302.4, 1005.9, 300.4);
  ctx.bezierCurveTo(1007.9, 302.4, 1009.9, 303.4, 1011.9, 305.4);
  ctx.bezierCurveTo(1008.9, 298.4, 1005.9, 297.4, 999.9, 297.4);
  ctx.bezierCurveTo(1006.9, 296.4, 1014.9, 294.4, 1019.9, 299.4);
  ctx.bezierCurveTo(1018.9, 299.4, 1018.9, 299.4, 1017.9, 299.4);
  ctx.bezierCurveTo(1017.9, 300.4, 1019.9, 303.4, 1018.9, 303.4);
  ctx.bezierCurveTo(1018.9, 303.4, 1016.9, 300.4, 1016.9, 299.4);
  ctx.bezierCurveTo(1016.9, 301.4, 1017.9, 303.4, 1017.9, 304.4);
  ctx.bezierCurveTo(1015.9, 306.4, 1016.9, 305.4, 1015.9, 307.4);
  ctx.bezierCurveTo(1013.9, 303.4, 1012.9, 301.4, 1012.9, 296.4);
  ctx.bezierCurveTo(1013.9, 298.4, 1014.9, 301.4, 1015.9, 303.4);
  ctx.bezierCurveTo(1015.9, 302.4, 1014.9, 301.4, 1013.9, 301.4);
  ctx.bezierCurveTo(1014.9, 302.4, 1012.9, 302.4, 1012.9, 302.4);
  ctx.bezierCurveTo(1012.9, 303.4, 1012.9, 303.4, 1012.9, 303.4);
  ctx.bezierCurveTo(1012.9, 302.4, 1012.9, 302.4, 1012.9, 301.4);
  ctx.bezierCurveTo(1012.9, 300.4, 1012.9, 300.4, 1013.9, 298.4);
  ctx.bezierCurveTo(1012.9, 304.4, 1012.9, 310.4, 1014.9, 315.4);
  ctx.bezierCurveTo(1017.9, 309.4, 1020.9, 302.4, 1011.9, 298.4);
  ctx.bezierCurveTo(1011.9, 298.4, 1015.9, 300.4, 1015.9, 299.4);
  ctx.bezierCurveTo(1015.9, 301.4, 1016.9, 302.4, 1017.9, 304.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(930.9, 129.4);
  ctx.bezierCurveTo(930.9, 139.4, 931.9, 148.4, 932.9, 158.4);
  ctx.bezierCurveTo(932.9, 138.4, 930.9, 119.4, 935.9, 100.4);
  ctx.bezierCurveTo(937.9, 105.4, 938.9, 110.4, 938.9, 116.4);
  ctx.bezierCurveTo(940.9, 116.4, 941.9, 116.4, 942.9, 116.4);
  ctx.bezierCurveTo(940.9, 119.4, 938.9, 123.4, 936.9, 126.4);
  ctx.bezierCurveTo(941.9, 125.4, 946.9, 124.4, 951.9, 122.4);
  ctx.bezierCurveTo(949.9, 124.4, 946.9, 127.4, 944.9, 129.4);
  ctx.bezierCurveTo(949.9, 126.4, 955.9, 123.4, 961.9, 122.4);
  ctx.bezierCurveTo(952.9, 127.4, 942.9, 131.4, 933.9, 137.4);
  ctx.bezierCurveTo(941.9, 137.4, 950.9, 135.4, 958.9, 134.4);
  ctx.bezierCurveTo(954.9, 136.4, 950.9, 136.4, 946.9, 137.4);
  ctx.bezierCurveTo(958.9, 127.4, 946.9, 123.4, 945.9, 112.4);
  ctx.bezierCurveTo(949.9, 113.4, 955.9, 114.4, 959.9, 116.4);
  ctx.bezierCurveTo(955.9, 105.4, 942.9, 96.4, 932.9, 89.4);
  ctx.bezierCurveTo(937.9, 96.4, 944.9, 101.4, 951.9, 105.4);
  ctx.bezierCurveTo(951.9, 103.4, 951.9, 99.4, 950.9, 96.4);
  ctx.bezierCurveTo(958.9, 102.4, 969.9, 111.4, 978.9, 110.4);
  ctx.bezierCurveTo(979.9, 114.4, 977.9, 122.4, 972.9, 127.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(964.9, 220.4);
  ctx.bezierCurveTo(964.9, 230.4, 961.9, 239.4, 961.9, 249.4);
  ctx.bezierCurveTo(959.9, 236.4, 957.9, 223.4, 958.9, 210.4);
  ctx.bezierCurveTo(960.9, 217.4, 961.9, 224.4, 961.9, 231.4);
  ctx.bezierCurveTo(958.9, 224.4, 957.9, 217.4, 956.9, 210.4);
  ctx.bezierCurveTo(958.9, 223.4, 960.9, 236.4, 963.9, 249.4);
  ctx.bezierCurveTo(962.9, 243.4, 960.9, 238.4, 958.9, 233.4);
  ctx.bezierCurveTo(959.9, 236.4, 960.9, 239.4, 961.9, 243.4);
  ctx.bezierCurveTo(963.9, 232.4, 962.9, 222.4, 962.9, 211.4);
  ctx.bezierCurveTo(964.9, 220.4, 965.9, 230.4, 968.9, 239.4);
  ctx.bezierCurveTo(968.9, 232.4, 967.9, 224.4, 965.9, 217.4);
  ctx.bezierCurveTo(966.9, 222.4, 969.9, 226.4, 970.9, 230.4);
  ctx.bezierCurveTo(969.9, 222.4, 968.9, 214.4, 966.9, 206.4);
  ctx.bezierCurveTo(969.9, 211.4, 972.9, 216.4, 976.9, 220.4);
  ctx.bezierCurveTo(976.9, 218.4, 975.9, 216.4, 974.9, 214.4);
  ctx.bezierCurveTo(976.9, 218.4, 978.9, 221.4, 980.9, 224.4);
  ctx.bezierCurveTo(979.9, 222.4, 978.9, 220.4, 977.9, 218.4);
  ctx.bezierCurveTo(979.9, 221.4, 981.9, 224.4, 982.9, 227.4);
  ctx.bezierCurveTo(983.9, 221.4, 981.9, 215.4, 979.9, 209.4);
  ctx.bezierCurveTo(979.9, 211.4, 980.9, 213.4, 980.9, 215.4);
  ctx.bezierCurveTo(976.9, 212.4, 972.9, 207.4, 969.9, 202.4);
  ctx.bezierCurveTo(971.9, 205.4, 974.9, 207.4, 976.9, 209.4);
  ctx.bezierCurveTo(975.9, 206.4, 975.9, 203.4, 975.9, 201.4);
  ctx.bezierCurveTo(978.9, 204.4, 978.9, 208.4, 979.9, 212.4);
  ctx.bezierCurveTo(972.9, 216.4, 975.9, 226.4, 977.9, 235.4);
  ctx.bezierCurveTo(974.9, 228.4, 971.9, 222.4, 967.9, 216.4);
  ctx.bezierCurveTo(970.9, 222.4, 972.9, 228.4, 974.9, 234.4);
  ctx.bezierCurveTo(972.9, 229.4, 969.9, 225.4, 967.9, 221.4);
  ctx.bezierCurveTo(968.9, 227.4, 969.9, 233.4, 969.9, 240.4);
  ctx.bezierCurveTo(964.9, 225.4, 960.9, 211.4, 953.9, 197.4);
  ctx.bezierCurveTo(953.9, 201.4, 954.9, 205.4, 955.9, 209.4);
  ctx.bezierCurveTo(954.9, 208.4, 954.9, 208.4, 954.9, 207.4);
  ctx.bezierCurveTo(954.9, 207.4, 954.9, 208.4, 955.9, 208.4);
  ctx.bezierCurveTo(949.9, 197.4, 940.9, 171.4, 929.9, 165.4);
  ctx.bezierCurveTo(930.9, 167.4, 931.9, 170.4, 933.9, 173.4);
  ctx.bezierCurveTo(932.9, 173.4, 930.9, 171.4, 930.9, 171.4);
  ctx.bezierCurveTo(931.9, 178.4, 935.9, 177.4, 937.9, 178.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(958.9, 243.4);
  ctx.bezierCurveTo(958.9, 253.4, 963.9, 263.4, 964.9, 273.4);
  ctx.bezierCurveTo(961.9, 257.4, 962.9, 241.4, 962.9, 225.4);
  ctx.bezierCurveTo(964.9, 239.4, 962.9, 252.4, 960.9, 265.4);
  ctx.bezierCurveTo(960.9, 250.4, 959.9, 235.4, 959.9, 220.4);
  ctx.bezierCurveTo(964.9, 231.4, 965.9, 243.4, 966.9, 254.4);
  ctx.bezierCurveTo(966.9, 244.4, 963.9, 234.4, 961.9, 224.4);
  ctx.bezierCurveTo(963.9, 237.4, 965.9, 250.4, 966.9, 263.4);
  ctx.bezierCurveTo(967.9, 250.4, 965.9, 237.4, 963.9, 225.4);
  ctx.bezierCurveTo(964.9, 231.4, 965.9, 237.4, 968.9, 243.4);
  ctx.bezierCurveTo(968.9, 238.4, 968.9, 232.4, 967.9, 227.4);
  ctx.bezierCurveTo(968.9, 234.4, 968.9, 242.4, 969.9, 250.4);
  ctx.bezierCurveTo(966.9, 240.4, 965.9, 231.4, 962.9, 222.4);
  ctx.bezierCurveTo(962.9, 228.4, 963.9, 234.4, 964.9, 240.4);
  ctx.bezierCurveTo(964.9, 231.4, 963.9, 222.4, 963.9, 213.4);
  ctx.bezierCurveTo(968.9, 223.4, 969.9, 233.4, 974.9, 243.4);
  ctx.bezierCurveTo(973.9, 238.4, 972.9, 233.4, 970.9, 229.4);
  ctx.bezierCurveTo(972.9, 232.4, 974.9, 236.4, 975.9, 239.4);
  ctx.bezierCurveTo(975.9, 230.4, 973.9, 222.4, 972.9, 214.4);
  ctx.bezierCurveTo(975.9, 224.4, 978.9, 234.4, 982.9, 243.4);
  ctx.bezierCurveTo(981.9, 235.4, 978.9, 227.4, 976.9, 219.4);
  ctx.bezierCurveTo(981.9, 225.4, 985.9, 232.4, 990.9, 238.4);
  ctx.bezierCurveTo(990.9, 231.4, 989.9, 225.4, 989.9, 219.4);
  ctx.bezierCurveTo(991.9, 222.4, 994.9, 225.4, 996.9, 229.4);
  ctx.bezierCurveTo(992.9, 224.4, 989.9, 219.4, 985.9, 214.4);
  ctx.bezierCurveTo(988.9, 218.4, 990.9, 223.4, 992.9, 227.4);
  ctx.bezierCurveTo(989.9, 224.4, 986.9, 221.4, 984.9, 218.4);
  ctx.bezierCurveTo(986.9, 225.4, 989.9, 231.4, 992.9, 237.4);
  ctx.bezierCurveTo(989.9, 234.4, 987.9, 230.4, 984.9, 226.4);
  ctx.bezierCurveTo(986.9, 230.4, 988.9, 235.4, 991.9, 239.4);
  ctx.bezierCurveTo(989.9, 233.4, 986.9, 227.4, 982.9, 222.4);
  ctx.bezierCurveTo(987.9, 231.4, 991.9, 242.4, 997.9, 250.4);
  ctx.bezierCurveTo(997.9, 245.4, 996.9, 239.4, 995.9, 234.4);
  ctx.bezierCurveTo(998.9, 238.4, 1001.9, 241.4, 1004.9, 246.4);
  ctx.bezierCurveTo(1002.9, 242.4, 999.9, 239.4, 996.9, 235.4);
  ctx.bezierCurveTo(996.9, 236.4, 997.9, 238.4, 997.9, 239.4);
  ctx.bezierCurveTo(993.9, 234.4, 990.9, 230.4, 986.9, 225.4);
  ctx.bezierCurveTo(987.9, 232.4, 990.9, 238.4, 993.9, 244.4);
  ctx.bezierCurveTo(989.9, 237.4, 985.9, 230.4, 981.9, 224.4);
  ctx.bezierCurveTo(983.9, 229.4, 986.9, 234.4, 990.9, 237.4);
  ctx.bezierCurveTo(990.9, 235.4, 991.9, 234.4, 991.9, 234.4);
  ctx.bezierCurveTo(997.9, 238.4, 1000.9, 247.4, 1001.9, 246.4);
  ctx.bezierCurveTo(1004.9, 247.4, 1002.9, 248.4, 998.9, 245.4);
  ctx.bezierCurveTo(999.9, 249.4, 1000.9, 254.4, 1002.9, 258.4);
  ctx.bezierCurveTo(1000.9, 255.4, 1000.9, 251.4, 999.9, 248.4);
  ctx.bezierCurveTo(1002.9, 250.4, 1000.9, 249.4, 1003.9, 248.4);
  ctx.bezierCurveTo(1005.9, 249.4, 1005.9, 251.4, 1007.9, 253.4);
  ctx.bezierCurveTo(1006.9, 251.4, 1006.9, 249.4, 1004.9, 247.4);
  ctx.bezierCurveTo(1005.9, 252.4, 1006.9, 258.4, 1005.9, 264.4);
  ctx.bezierCurveTo(1004.9, 260.4, 1003.9, 255.4, 1002.9, 252.4);
  ctx.bezierCurveTo(1006.9, 254.4, 1008.9, 256.4, 1010.9, 259.4);
  ctx.bezierCurveTo(1007.9, 257.4, 1005.9, 258.4, 1002.9, 258.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(959.9, 263.4);
  ctx.bezierCurveTo(959.9, 274.4, 957.9, 288.4, 961.9, 297.4);
  ctx.bezierCurveTo(961.9, 285.4, 964.9, 272.4, 964.9, 260.4);
  ctx.bezierCurveTo(962.9, 268.4, 961.9, 276.4, 960.9, 284.4);
  ctx.bezierCurveTo(960.9, 276.4, 962.9, 268.4, 962.9, 261.4);
  ctx.bezierCurveTo(961.9, 270.4, 964.9, 279.4, 968.9, 288.4);
  ctx.bezierCurveTo(968.9, 283.4, 967.9, 280.4, 966.9, 276.4);
  ctx.bezierCurveTo(965.9, 282.4, 965.9, 287.4, 966.9, 292.4);
  ctx.bezierCurveTo(965.9, 289.4, 964.9, 286.4, 963.9, 283.4);
  ctx.bezierCurveTo(963.9, 285.4, 964.9, 288.4, 965.9, 290.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(1125.9, 194.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(979.9, 250.4);
  ctx.bezierCurveTo(979.9, 259.4, 979.9, 268.4, 979.9, 276.4);
  ctx.bezierCurveTo(976.9, 264.4, 975.9, 252.4, 974.9, 239.4);
  ctx.bezierCurveTo(973.9, 256.4, 974.9, 274.4, 970.9, 289.4);
  ctx.bezierCurveTo(969.9, 274.4, 969.9, 259.4, 969.9, 244.4);
  ctx.bezierCurveTo(969.9, 249.4, 969.9, 253.4, 969.9, 258.4);
  ctx.bezierCurveTo(969.9, 253.4, 969.9, 247.4, 969.9, 242.4);
  ctx.bezierCurveTo(971.9, 252.4, 971.9, 262.4, 969.9, 272.4);
  ctx.bezierCurveTo(968.9, 264.4, 968.9, 256.4, 968.9, 248.4);
  ctx.bezierCurveTo(968.9, 254.4, 968.9, 260.4, 967.9, 265.4);
  ctx.bezierCurveTo(966.9, 260.4, 965.9, 255.4, 965.9, 249.4);
  ctx.bezierCurveTo(966.9, 254.4, 967.9, 258.4, 968.9, 263.4);
  ctx.bezierCurveTo(968.9, 256.4, 968.9, 250.4, 968.9, 244.4);
  ctx.bezierCurveTo(968.9, 252.4, 968.9, 259.4, 966.9, 266.4);
  ctx.bezierCurveTo(965.9, 260.4, 965.9, 254.4, 965.9, 247.4);
  ctx.bezierCurveTo(965.9, 249.4, 965.9, 250.4, 965.9, 252.4);
  ctx.bezierCurveTo(966.9, 247.4, 968.9, 242.4, 970.9, 237.4);
  ctx.bezierCurveTo(973.9, 245.4, 973.9, 254.4, 975.9, 262.4);
  ctx.bezierCurveTo(973.9, 254.4, 971.9, 245.4, 970.9, 237.4);
  ctx.bezierCurveTo(972.9, 243.4, 973.9, 250.4, 975.9, 257.4);
  ctx.bezierCurveTo(976.9, 248.4, 975.9, 239.4, 974.9, 231.4);
  ctx.bezierCurveTo(975.9, 239.4, 976.9, 246.4, 979.9, 253.4);
  ctx.bezierCurveTo(978.9, 246.4, 978.9, 239.4, 977.9, 232.4);
  ctx.bezierCurveTo(979.9, 240.4, 981.9, 247.4, 982.9, 255.4);
  ctx.bezierCurveTo(981.9, 251.4, 980.9, 246.4, 979.9, 242.4);
  ctx.bezierCurveTo(981.9, 247.4, 984.9, 253.4, 987.9, 258.4);
  ctx.bezierCurveTo(988.9, 248.4, 985.9, 238.4, 985.9, 229.4);
  ctx.bezierCurveTo(987.9, 238.4, 990.9, 247.4, 993.9, 255.4);
  ctx.bezierCurveTo(988.9, 248.4, 984.9, 241.4, 978.9, 234.4);
  ctx.bezierCurveTo(979.9, 241.4, 982.9, 247.4, 986.9, 253.4);
  ctx.bezierCurveTo(982.9, 246.4, 979.9, 239.4, 976.9, 232.4);
  ctx.bezierCurveTo(982.9, 239.4, 988.9, 249.4, 996.9, 254.4);
  ctx.bezierCurveTo(995.9, 247.4, 993.9, 241.4, 990.9, 235.4);
  ctx.bezierCurveTo(992.9, 244.4, 996.9, 254.4, 1000.9, 263.4);
  ctx.bezierCurveTo(997.9, 255.4, 993.9, 247.4, 989.9, 240.4);
  ctx.bezierCurveTo(988.9, 250.4, 993.9, 262.4, 997.9, 271.4);
  ctx.bezierCurveTo(995.9, 268.4, 994.9, 264.4, 992.9, 260.4);
  ctx.bezierCurveTo(992.9, 259.4, 991.9, 250.4, 990.9, 247.4);
  ctx.bezierCurveTo(994.9, 252.4, 997.9, 256.4, 1000.9, 261.4);
  ctx.bezierCurveTo(999.9, 257.4, 1000.9, 253.4, 999.9, 250.4);
  ctx.bezierCurveTo(999.9, 256.4, 1000.9, 263.4, 1000.9, 269.4);
  ctx.bezierCurveTo(1000.9, 266.4, 1001.9, 263.4, 1001.9, 259.4);
  ctx.bezierCurveTo(1001.9, 260.4, 1001.9, 268.4, 1001.9, 264.4);
  ctx.bezierCurveTo(1001.9, 263.4, 1000.9, 269.4, 1000.9, 270.4);
  ctx.bezierCurveTo(997.9, 263.4, 997.9, 256.4, 995.9, 248.4);
  ctx.bezierCurveTo(995.9, 251.4, 994.9, 253.4, 994.9, 255.4);
  ctx.bezierCurveTo(994.9, 251.4, 993.9, 246.4, 992.9, 242.4);
  ctx.bezierCurveTo(992.9, 248.4, 992.9, 254.4, 993.9, 260.4);
  ctx.bezierCurveTo(990.9, 250.4, 987.9, 239.4, 982.9, 229.4);
  ctx.bezierCurveTo(983.9, 235.4, 983.9, 242.4, 983.9, 248.4);
  ctx.bezierCurveTo(983.9, 245.4, 982.9, 242.4, 982.9, 239.4);
  ctx.bezierCurveTo(982.9, 241.4, 982.9, 244.4, 983.9, 246.4);
  ctx.bezierCurveTo(983.9, 242.4, 986.9, 238.4, 987.9, 234.4);
  ctx.bezierCurveTo(988.9, 235.4, 991.9, 236.4, 992.9, 238.4);
  ctx.bezierCurveTo(995.9, 226.4, 975.9, 213.4, 969.9, 203.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(979.9, 256.4);
  ctx.bezierCurveTo(979.9, 261.4, 979.9, 266.4, 979.9, 271.4);
  ctx.bezierCurveTo(979.9, 268.4, 979.9, 264.4, 979.9, 261.4);
  ctx.bezierCurveTo(979.9, 266.4, 980.9, 272.4, 981.9, 277.4);
  ctx.bezierCurveTo(981.9, 271.4, 981.9, 264.4, 981.9, 258.4);
  ctx.bezierCurveTo(982.9, 259.4, 982.9, 261.4, 983.9, 262.4);
  ctx.bezierCurveTo(983.9, 260.4, 983.9, 259.4, 983.9, 257.4);
  ctx.bezierCurveTo(987.9, 265.4, 987.9, 273.4, 987.9, 281.4);
  ctx.bezierCurveTo(985.9, 275.4, 984.9, 269.4, 983.9, 263.4);
  ctx.bezierCurveTo(983.9, 264.4, 983.9, 265.4, 983.9, 266.4);
  ctx.bezierCurveTo(983.9, 265.4, 983.9, 263.4, 982.9, 262.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(970.9, 282.4);
  ctx.bezierCurveTo(972.9, 284.4, 974.9, 288.4, 974.9, 291.4);
  ctx.bezierCurveTo(974.9, 291.4, 970.9, 290.4, 969.9, 290.4);
  ctx.bezierCurveTo(970.9, 292.4, 970.9, 296.4, 970.9, 298.4);
  ctx.bezierCurveTo(969.9, 296.4, 967.9, 292.4, 966.9, 289.4);
  ctx.bezierCurveTo(968.9, 291.4, 971.9, 292.4, 971.9, 293.4);
  ctx.bezierCurveTo(970.9, 288.4, 972.9, 282.4, 971.9, 278.4);
  ctx.bezierCurveTo(973.9, 281.4, 976.9, 284.4, 978.9, 288.4);
  ctx.bezierCurveTo(977.9, 286.4, 976.9, 283.4, 975.9, 281.4);
  ctx.bezierCurveTo(976.9, 285.4, 977.9, 289.4, 979.9, 293.4);
  ctx.bezierCurveTo(979.9, 284.4, 978.9, 277.4, 981.9, 269.4);
  ctx.bezierCurveTo(981.9, 273.4, 982.9, 278.4, 982.9, 282.4);
  ctx.bezierCurveTo(981.9, 277.4, 979.9, 271.4, 977.9, 266.4);
  ctx.bezierCurveTo(976.9, 272.4, 976.9, 278.4, 977.9, 284.4);
  ctx.bezierCurveTo(977.9, 283.4, 977.9, 281.4, 976.9, 279.4);
  ctx.bezierCurveTo(976.9, 280.4, 975.9, 280.4, 975.9, 281.4);
  ctx.bezierCurveTo(975.9, 279.4, 975.9, 277.4, 974.9, 275.4);
  ctx.bezierCurveTo(975.9, 278.4, 975.9, 281.4, 975.9, 285.4);
  ctx.bezierCurveTo(974.9, 281.4, 971.9, 277.4, 969.9, 274.4);
  ctx.bezierCurveTo(969.9, 276.4, 969.9, 278.4, 968.9, 280.4);
  ctx.bezierCurveTo(968.9, 274.4, 967.9, 269.4, 966.9, 264.4);
  ctx.bezierCurveTo(965.9, 264.4, 965.9, 263.4, 965.9, 262.4);
  ctx.bezierCurveTo(965.9, 267.4, 966.9, 272.4, 967.9, 277.4);
  ctx.bezierCurveTo(968.9, 272.4, 970.9, 266.4, 972.9, 261.4);
  ctx.bezierCurveTo(974.9, 261.4, 976.9, 263.4, 977.9, 264.4);
  ctx.bezierCurveTo(978.9, 262.4, 978.9, 260.4, 978.9, 258.4);
  ctx.bezierCurveTo(982.9, 265.4, 983.9, 273.4, 984.9, 281.4);
  ctx.bezierCurveTo(984.9, 279.4, 984.9, 276.4, 984.9, 274.4);
  ctx.bezierCurveTo(985.9, 280.4, 986.9, 286.4, 987.9, 292.4);
  ctx.bezierCurveTo(989.9, 286.4, 989.9, 279.4, 990.9, 272.4);
  ctx.bezierCurveTo(991.9, 276.4, 992.9, 280.4, 993.9, 284.4);
  ctx.bezierCurveTo(993.9, 278.4, 992.9, 271.4, 991.9, 265.4);
  ctx.bezierCurveTo(992.9, 268.4, 993.9, 271.4, 993.9, 274.4);
  ctx.bezierCurveTo(993.9, 270.4, 992.9, 267.4, 991.9, 264.4);
  ctx.bezierCurveTo(991.9, 267.4, 991.9, 269.4, 991.9, 272.4);
  ctx.bezierCurveTo(990.9, 266.4, 988.9, 261.4, 986.9, 256.4);
  ctx.bezierCurveTo(987.9, 262.4, 989.9, 267.4, 992.9, 273.4);
  ctx.bezierCurveTo(993.9, 267.4, 992.9, 262.4, 991.9, 257.4);
  ctx.bezierCurveTo(994.9, 257.4, 988.9, 259.4, 993.9, 257.4);
  ctx.bezierCurveTo(995.9, 268.4, 997.9, 284.4, 994.9, 294.4);
  ctx.bezierCurveTo(992.9, 292.4, 991.9, 289.4, 989.9, 287.4);
  ctx.bezierCurveTo(990.9, 290.4, 990.9, 293.4, 991.9, 297.4);
  ctx.bezierCurveTo(990.9, 292.4, 989.9, 288.4, 987.9, 283.4);
  ctx.bezierCurveTo(989.9, 287.4, 993.9, 290.4, 995.9, 293.4);
  ctx.bezierCurveTo(995.9, 291.4, 995.9, 289.4, 995.9, 287.4);
  ctx.bezierCurveTo(997.9, 291.4, 999.9, 295.4, 1001.9, 299.4);
  ctx.bezierCurveTo(997.9, 294.4, 993.9, 289.4, 988.9, 285.4);
  ctx.bezierCurveTo(989.9, 289.4, 988.9, 294.4, 989.9, 298.4);
  ctx.bezierCurveTo(984.9, 293.4, 980.9, 288.4, 975.9, 284.4);
  ctx.bezierCurveTo(975.9, 288.4, 974.9, 291.4, 975.9, 294.4);
  ctx.bezierCurveTo(974.9, 292.4, 973.9, 288.4, 973.9, 285.4);
  ctx.bezierCurveTo(973.9, 287.4, 974.9, 288.4, 975.9, 289.4);
  ctx.bezierCurveTo(976.9, 287.4, 976.9, 284.4, 977.9, 282.4);
  ctx.bezierCurveTo(979.9, 284.4, 979.9, 286.4, 981.9, 288.4);
  ctx.bezierCurveTo(982.9, 286.4, 982.9, 283.4, 983.9, 282.4);
  ctx.bezierCurveTo(984.9, 283.4, 984.9, 286.4, 986.9, 286.4);
  ctx.bezierCurveTo(986.9, 286.4, 986.9, 285.4, 986.9, 284.4);
  ctx.bezierCurveTo(987.9, 285.4, 987.9, 286.4, 987.9, 287.4);
  ctx.bezierCurveTo(988.9, 286.4, 984.9, 292.4, 984.9, 293.4);
  ctx.bezierCurveTo(984.9, 294.4, 982.9, 289.4, 982.9, 289.4);
  ctx.bezierCurveTo(982.9, 291.4, 982.9, 293.4, 982.9, 295.4);
  ctx.bezierCurveTo(980.9, 293.4, 977.9, 290.4, 976.9, 287.4);
  ctx.bezierCurveTo(976.9, 289.4, 976.9, 291.4, 976.9, 293.4);
  ctx.bezierCurveTo(975.9, 292.4, 975.9, 292.4, 974.9, 293.4);
  ctx.bezierCurveTo(974.9, 295.4, 974.9, 297.4, 974.9, 300.4);
  ctx.bezierCurveTo(973.9, 299.4, 973.9, 297.4, 972.9, 297.4);
  ctx.bezierCurveTo(971.9, 298.4, 971.9, 299.4, 972.9, 299.4);
  ctx.bezierCurveTo(971.9, 298.4, 969.9, 296.4, 968.9, 294.4);
  ctx.bezierCurveTo(968.9, 295.4, 968.9, 295.4, 969.9, 296.4);
  ctx.bezierCurveTo(965.9, 292.4, 967.9, 292.4, 963.9, 290.4);
  ctx.bezierCurveTo(966.9, 296.4, 972.9, 299.4, 978.9, 302.4);
  ctx.bezierCurveTo(977.9, 300.4, 977.9, 298.4, 976.9, 296.4);
  ctx.bezierCurveTo(978.9, 298.4, 978.9, 297.4, 978.9, 295.4);
  ctx.bezierCurveTo(979.9, 297.4, 981.9, 299.4, 983.9, 301.4);
  ctx.bezierCurveTo(982.9, 299.4, 981.9, 295.4, 980.9, 293.4);
  ctx.bezierCurveTo(979.9, 293.4, 982.9, 295.4, 982.9, 296.4);
  ctx.bezierCurveTo(982.9, 295.4, 984.9, 290.4, 985.9, 289.4);
  ctx.bezierCurveTo(988.9, 290.4, 994.9, 293.4, 996.9, 294.4);
  ctx.lineTo(994.9, 293.4);
  ctx.bezierCurveTo(996.9, 300.4, 1002.9, 306.4, 1009.9, 309.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(1010.9, 315.4);
  ctx.bezierCurveTo(1009.9, 315.4, 1007.9, 318.4, 1005.9, 318.4);
  ctx.bezierCurveTo(1005.9, 318.4, 1008.9, 316.4, 1009.9, 315.4);
  ctx.bezierCurveTo(1010.9, 317.4, 1009.9, 321.4, 1010.9, 322.4);
  ctx.bezierCurveTo(1009.9, 322.4, 1007.9, 321.4, 1006.9, 322.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(1005.9, 332.4);
  ctx.bezierCurveTo(1004.9, 340.4, 1003.9, 348.4, 1002.9, 355.4);
  ctx.bezierCurveTo(1005.9, 344.4, 1008.9, 333.4, 1010.9, 321.4);
  ctx.bezierCurveTo(1010.9, 326.4, 1010.9, 332.4, 1009.9, 337.4);
  ctx.bezierCurveTo(1010.9, 334.4, 1011.9, 331.4, 1012.9, 329.4);
  ctx.bezierCurveTo(1012.9, 333.4, 1012.9, 336.4, 1011.9, 340.4);
  ctx.bezierCurveTo(1010.9, 333.4, 1010.9, 325.4, 1013.9, 317.4);
  ctx.bezierCurveTo(1014.9, 320.4, 1014.9, 322.4, 1015.9, 325.4);
  ctx.bezierCurveTo(1015.9, 323.4, 1016.9, 320.4, 1017.9, 318.4);
  ctx.bezierCurveTo(1017.9, 321.4, 1018.9, 324.4, 1018.9, 327.4);
  ctx.bezierCurveTo(1019.9, 324.4, 1020.9, 320.4, 1020.9, 316.4);
  ctx.bezierCurveTo(1020.9, 319.4, 1021.9, 323.4, 1022.9, 326.4);
  ctx.bezierCurveTo(1023.9, 324.4, 1024.9, 322.4, 1025.9, 320.4);
  ctx.bezierCurveTo(1026.9, 332.4, 1021.9, 347.4, 1014.9, 356.4);
  ctx.bezierCurveTo(1014.9, 349.4, 1016.9, 341.4, 1017.9, 334.4);
  ctx.bezierCurveTo(1014.9, 342.4, 1011.9, 349.4, 1007.9, 356.4);
  ctx.bezierCurveTo(1012.9, 343.4, 1020.9, 329.4, 1020.9, 314.4);
  ctx.lineTo(1025.9, 318.4);
  ctx.bezierCurveTo(1025.9, 318.4, 1025.9, 313.4, 1024.9, 314.4);
  ctx.bezierCurveTo(1025.9, 317.4, 1026.9, 321.4, 1027.9, 324.4);
  ctx.bezierCurveTo(1028.9, 321.4, 1029.9, 317.4, 1029.9, 315.4);
  ctx.bezierCurveTo(1030.9, 315.4, 1030.9, 316.4, 1030.9, 317.4);
  ctx.bezierCurveTo(1029.9, 317.4, 1029.9, 317.4, 1028.9, 317.4);
  ctx.bezierCurveTo(1028.9, 319.4, 1028.9, 321.4, 1028.9, 323.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(837.9, 602.4);
  ctx.bezierCurveTo(852.9, 601.4, 868.9, 598.4, 883.9, 594.4);
  ctx.bezierCurveTo(871.9, 602.4, 851.9, 603.4, 837.9, 606.4);
  ctx.bezierCurveTo(847.9, 597.4, 864.9, 599.4, 877.9, 596.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(791.9, 447.4);
  ctx.bezierCurveTo(791.9, 451.4, 791.9, 455.4, 791.9, 458.4);
  ctx.bezierCurveTo(792.9, 453.4, 792.9, 448.4, 793.9, 443.4);
  ctx.bezierCurveTo(792.9, 449.4, 792.9, 455.4, 792.9, 462.4);
  ctx.bezierCurveTo(792.9, 456.4, 791.9, 451.4, 792.9, 446.4);
  ctx.bezierCurveTo(790.9, 448.4, 789.9, 450.4, 788.9, 454.4);
  ctx.bezierCurveTo(790.9, 450.4, 792.9, 447.4, 793.9, 443.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(787.9, 464.4);
  ctx.bezierCurveTo(786.9, 464.4, 786.9, 464.4, 785.9, 464.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(796.9, 422.4);
  ctx.bezierCurveTo(795.9, 425.4, 793.9, 427.4, 793.9, 430.4);
  ctx.bezierCurveTo(794.9, 428.4, 795.9, 426.4, 797.9, 424.4);
  ctx.bezierCurveTo(797.9, 426.4, 796.9, 428.4, 796.9, 431.4);
  ctx.bezierCurveTo(797.9, 428.4, 798.9, 426.4, 799.9, 423.4);
  ctx.bezierCurveTo(796.9, 427.4, 794.9, 432.4, 792.9, 437.4);
  ctx.bezierCurveTo(793.9, 435.4, 793.9, 432.4, 794.9, 431.4);
  ctx.bezierCurveTo(794.9, 433.4, 794.9, 436.4, 793.9, 439.4);
  ctx.bezierCurveTo(794.9, 437.4, 795.9, 433.4, 796.9, 431.4);
  ctx.bezierCurveTo(793.9, 436.4, 790.9, 442.4, 788.9, 448.4);
  ctx.bezierCurveTo(789.9, 443.4, 792.9, 438.4, 793.9, 434.4);
  ctx.bezierCurveTo(793.9, 437.4, 794.9, 440.4, 793.9, 444.4);
  ctx.bezierCurveTo(793.9, 443.4, 794.9, 440.4, 793.9, 440.4);
  ctx.bezierCurveTo(794.9, 442.4, 793.9, 444.4, 793.9, 447.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(796.9, 467.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(797.9, 469.4);
  ctx.bezierCurveTo(807.9, 468.4, 816.9, 457.4, 825.9, 469.4);
  ctx.bezierCurveTo(822.9, 466.4, 818.9, 465.4, 813.9, 464.4);
  ctx.bezierCurveTo(820.9, 463.4, 826.9, 465.4, 829.9, 471.4);
  ctx.bezierCurveTo(830.9, 471.4, 834.9, 472.4, 837.9, 473.4);
  ctx.bezierCurveTo(834.9, 472.4, 833.9, 472.4, 829.9, 470.4);
  ctx.bezierCurveTo(833.9, 469.4, 832.9, 470.4, 836.9, 471.4);
  ctx.bezierCurveTo(835.9, 471.4, 832.9, 470.4, 832.9, 471.4);
  ctx.bezierCurveTo(836.9, 474.4, 842.9, 476.4, 847.9, 477.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(937.9, 692.4);
  ctx.bezierCurveTo(935.9, 693.4, 933.9, 694.4, 932.9, 695.4);
  ctx.bezierCurveTo(931.9, 689.4, 933.9, 681.4, 933.9, 674.4);
  ctx.bezierCurveTo(931.9, 680.4, 928.9, 685.4, 923.9, 689.4);
  ctx.bezierCurveTo(923.9, 683.4, 927.9, 677.4, 930.9, 672.4);
  ctx.bezierCurveTo(927.9, 681.4, 926.9, 690.4, 922.9, 698.4);
  ctx.bezierCurveTo(922.9, 686.4, 927.9, 674.4, 929.9, 662.4);
  ctx.bezierCurveTo(929.9, 666.4, 929.9, 669.4, 928.9, 673.4);
  ctx.bezierCurveTo(929.9, 671.4, 930.9, 668.4, 931.9, 666.4);
  ctx.bezierCurveTo(935.9, 678.4, 933.9, 694.4, 934.9, 707.4);
  ctx.bezierCurveTo(935.9, 690.4, 934.9, 673.4, 932.9, 657.4);
  ctx.bezierCurveTo(932.9, 667.4, 933.9, 677.4, 933.9, 687.4);
  ctx.bezierCurveTo(932.9, 681.4, 932.9, 675.4, 932.9, 669.4);
  ctx.bezierCurveTo(933.9, 681.4, 934.9, 692.4, 935.9, 704.4);
  ctx.bezierCurveTo(935.9, 688.4, 934.9, 672.4, 934.9, 656.4);
  ctx.bezierCurveTo(937.9, 670.4, 938.9, 685.4, 942.9, 699.4);
  ctx.bezierCurveTo(941.9, 687.4, 940.9, 674.4, 939.9, 661.4);
  ctx.bezierCurveTo(939.9, 674.4, 940.9, 688.4, 941.9, 701.4);
  ctx.bezierCurveTo(937.9, 691.4, 932.9, 680.4, 928.9, 669.4);
  ctx.bezierCurveTo(929.9, 672.4, 931.9, 674.4, 932.9, 676.4);
  ctx.bezierCurveTo(936.9, 665.4, 933.9, 651.4, 933.9, 639.4);
  ctx.bezierCurveTo(934.9, 653.4, 934.9, 666.4, 932.9, 680.4);
  ctx.bezierCurveTo(931.9, 671.4, 931.9, 662.4, 932.9, 654.4);
  ctx.bezierCurveTo(932.9, 661.4, 931.9, 669.4, 931.9, 677.4);
  ctx.bezierCurveTo(931.9, 665.4, 931.9, 654.4, 932.9, 642.4);
  ctx.bezierCurveTo(932.9, 646.4, 934.9, 650.4, 934.9, 653.4);
  ctx.bezierCurveTo(935.9, 653.4, 936.9, 652.4, 937.9, 651.4);
  ctx.bezierCurveTo(941.9, 659.4, 940.9, 670.4, 941.9, 680.4);
  ctx.bezierCurveTo(939.9, 674.4, 938.9, 668.4, 937.9, 662.4);
  ctx.bezierCurveTo(936.9, 672.4, 942.9, 684.4, 933.9, 693.4);
  ctx.bezierCurveTo(934.9, 689.4, 934.9, 686.4, 935.9, 682.4);
  ctx.bezierCurveTo(934.9, 687.4, 931.9, 691.4, 929.9, 694.4);
  ctx.bezierCurveTo(929.9, 692.4, 929.9, 689.4, 930.9, 687.4);
  ctx.bezierCurveTo(929.9, 690.4, 928.9, 693.4, 927.9, 696.4);
  ctx.bezierCurveTo(927.9, 691.4, 927.9, 685.4, 928.9, 680.4);
  ctx.bezierCurveTo(927.9, 683.4, 925.9, 687.4, 923.9, 690.4);
  ctx.bezierCurveTo(924.9, 686.4, 925.9, 683.4, 926.9, 680.4);
  ctx.bezierCurveTo(926.9, 681.4, 925.9, 683.4, 925.9, 684.4);
  ctx.bezierCurveTo(927.9, 680.4, 929.9, 676.4, 931.9, 672.4);
  ctx.bezierCurveTo(931.9, 678.4, 929.9, 684.4, 925.9, 688.4);
  ctx.bezierCurveTo(925.9, 686.4, 924.9, 682.4, 924.9, 679.4);
  ctx.bezierCurveTo(923.9, 682.4, 922.9, 685.4, 921.9, 688.4);
  ctx.bezierCurveTo(921.9, 684.4, 920.9, 681.4, 921.9, 676.4);
  ctx.bezierCurveTo(920.9, 680.4, 917.9, 689.4, 917.9, 689.4);
  ctx.bezierCurveTo(916.9, 697.4, 914.9, 705.4, 911.9, 713.4);
  ctx.bezierCurveTo(915.9, 705.4, 920.9, 697.4, 924.9, 691.4);
  ctx.bezierCurveTo(925.9, 702.4, 924.9, 712.4, 922.9, 722.4);
  ctx.bezierCurveTo(922.9, 707.4, 925.9, 688.4, 931.9, 674.4);
  ctx.bezierCurveTo(932.9, 680.4, 933.9, 686.4, 933.9, 692.4);
  ctx.bezierCurveTo(932.9, 688.4, 932.9, 683.4, 932.9, 679.4);
  ctx.bezierCurveTo(934.9, 685.4, 935.9, 691.4, 937.9, 696.4);
  ctx.bezierCurveTo(938.9, 688.4, 937.9, 681.4, 937.9, 673.4);
  ctx.bezierCurveTo(939.9, 680.4, 940.9, 686.4, 942.9, 693.4);
  ctx.bezierCurveTo(941.9, 689.4, 941.9, 685.4, 941.9, 681.4);
  ctx.bezierCurveTo(942.9, 687.4, 943.9, 692.4, 944.9, 698.4);
  ctx.bezierCurveTo(942.9, 690.4, 940.9, 682.4, 938.9, 674.4);
  ctx.bezierCurveTo(939.9, 679.4, 941.9, 683.4, 942.9, 688.4);
  ctx.bezierCurveTo(940.9, 680.4, 937.9, 673.4, 934.9, 666.4);
  ctx.bezierCurveTo(934.9, 673.4, 936.9, 679.4, 939.9, 684.4);
  ctx.bezierCurveTo(939.9, 679.4, 940.9, 675.4, 940.9, 670.4);
  ctx.bezierCurveTo(940.9, 675.4, 938.9, 680.4, 937.9, 685.4);
  ctx.bezierCurveTo(936.9, 682.4, 935.9, 679.4, 935.9, 676.4);
  ctx.bezierCurveTo(934.9, 683.4, 934.9, 690.4, 933.9, 697.4);
  ctx.bezierCurveTo(934.9, 688.4, 935.9, 680.4, 936.9, 671.4);
  ctx.bezierCurveTo(937.9, 683.4, 927.9, 695.4, 922.9, 705.4);
  ctx.bezierCurveTo(922.9, 697.4, 924.9, 690.4, 927.9, 683.4);
  ctx.bezierCurveTo(928.9, 683.4, 928.9, 684.4, 928.9, 685.4);
  ctx.bezierCurveTo(928.9, 684.4, 928.9, 683.4, 928.9, 682.4);
  ctx.bezierCurveTo(926.9, 685.4, 925.9, 688.4, 923.9, 690.4);
  ctx.bezierCurveTo(921.9, 685.4, 923.9, 678.4, 925.9, 672.4);
  ctx.bezierCurveTo(925.9, 675.4, 924.9, 677.4, 923.9, 679.4);
  ctx.bezierCurveTo(923.9, 678.4, 923.9, 677.4, 924.9, 676.4);
  ctx.bezierCurveTo(921.9, 684.4, 918.9, 691.4, 916.9, 698.4);
  ctx.bezierCurveTo(917.9, 695.4, 919.9, 692.4, 920.9, 689.4);
  ctx.bezierCurveTo(919.9, 691.4, 919.9, 692.4, 918.9, 695.4);
  ctx.bezierCurveTo(923.9, 679.4, 939.9, 696.4, 923.9, 698.4);
  ctx.bezierCurveTo(929.9, 697.4, 934.9, 696.4, 940.9, 695.4);
  ctx.bezierCurveTo(936.9, 695.4, 932.9, 696.4, 929.9, 696.4);
  ctx.bezierCurveTo(936.9, 696.4, 944.9, 695.4, 951.9, 696.4);
  ctx.bezierCurveTo(946.9, 696.4, 939.9, 698.4, 938.9, 699.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(732.9, 630.4);
  ctx.bezierCurveTo(746.9, 640.4, 754.9, 652.4, 769.9, 661.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(849.9, 676.4);
  ctx.bezierCurveTo(847.9, 685.4, 845.9, 693.4, 841.9, 701.4);
  ctx.stroke();

  // woody/Path
  ctx.beginPath();
  ctx.moveTo(0.9, 774.4);
  ctx.stroke();
  ctx.restore();
}