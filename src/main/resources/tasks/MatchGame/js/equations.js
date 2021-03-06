var equations = {
// 1: {"first":8, "sec":0, "op":"+" , "res":9 , "mode":"remove" , "sol":["img1"]},
    2: {"first": 3, "sec": 1, "op": "+", "res": 2, "mode": "remove", "sol": [["img4"]]},
    3: {"first": 0, "sec": 1, "op": "+", "res": 9, "mode": "add", "sol": [["img16"]]},
    4: {"first": 5, "sec": 8, "op": "+", "res": 8, "mode": "remove", "sol": [["img5", "img6"]]},
    5: {"first": 1, "sec": 1, "op": "-", "res": 3, "mode": "add", "sol": [["img0", "img16"]]},
    6: {"first": 8, "sec": 9, "op": "-", "res": 4, "mode": "remove", "sol": [["img21", "img22"]]},
    7: {"first": 8, "sec": 7, "op": "+", "res": 8, "mode": "remove", "sol": [["img21", "img10"]]},
    8: {"first": 6, "sec": 4, "op": "-", "res": 7, "mode": "remove", "sol": [["img1", "img26"]]},
    9: {"first": 8, "sec": 7, "op": "+", "res": 2, "mode": "remove", "sol": [["img1", "img4"]]},


    // 0 -199
    10:{'first': '3', 'sec': '6', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img0']]},
    11:{'first': '3', 'sec': '6', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img11']]},
    12:{'first': '3', 'sec': '6', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img4']]},
    13:{'first': '3', 'sec': '9', 'op': '+', 'res': '9', 'mode': 'move', 'sol': [['img7']]},
    14:{'first': '4', 'sec': '6', 'op': '+', 'res': '3', 'mode': 'move', 'sol': [['img9']]},
    15:{'first': '4', 'sec': '6', 'op': '+', 'res': '5', 'mode': 'move', 'sol': [['img11']]},
    16:{'first': '4', 'sec': '6', 'op': '-', 'res': '9', 'mode': 'move', 'sol': [['img4']]},
    17:{'first': '5', 'sec': '6', 'op': '-', 'res': '1', 'mode': 'move', 'sol': [['img1']]},
    18:{'first': '5', 'sec': '6', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img2']]},
    19:{'first': '6', 'sec': '6', 'op': '-', 'res': '3', 'mode': 'move', 'sol': [['img2']]},
    20:{'first': '7', 'sec': '5', 'op': '+', 'res': '1', 'mode': 'move', 'sol': [['img4']]},
    21:{'first': '7', 'sec': '5', 'op': '+', 'res': '7', 'mode': 'move', 'sol': [['img17']]},
    22:{'first': '7', 'sec': '5', 'op': '-', 'res': '7', 'mode': 'move', 'sol': [['img26']]},
    23:{'first': '7', 'sec': '9', 'op': '-', 'res': '1', 'mode': 'move', 'sol': [['img7']]},
    24:{'first': '8', 'sec': '5', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img4']]},
    25:{'first': '8', 'sec': '9', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img7']]},
    26:{'first': '9', 'sec': '5', 'op': '+', 'res': '3', 'mode': 'move', 'sol': [['img4']]},
    27:{'first': '9', 'sec': '5', 'op': '+', 'res': '9', 'mode': 'move', 'sol': [['img0']]},
    28:{'first': '9', 'sec': '5', 'op': '-', 'res': '9', 'mode': 'move', 'sol': [['img9']]},
    29:{'first': '9', 'sec': '9', 'op': '-', 'res': '3', 'mode': 'move', 'sol': [['img7']]},
    30:{'first': '0', 'sec': '6', 'op': '-', 'res': '3', 'mode': 'move', 'sol': [['img16']]},
    31:{'first': '1', 'sec': '6', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img17']]},
    32:{'first': '1', 'sec': '6', 'op': '+', 'res': '5', 'mode': 'move', 'sol': [['img10']]},
    33:{'first': '1', 'sec': '6', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img4']]},
    34:{'first': '1', 'sec': '9', 'op': '+', 'res': '7', 'mode': 'move', 'sol': [['img7']]},
    35:{'first': '2', 'sec': '6', 'op': '+', 'res': '1', 'mode': 'move', 'sol': [['img26']]},
    36:{'first': '3', 'sec': '6', 'op': '+', 'res': '0', 'mode': 'move', 'sol': [['img25']]},
    37:{'first': '2', 'sec': '6', 'op': '-', 'res': '7', 'mode': 'move', 'sol': [['img4']]},
    38:{'first': '2', 'sec': '9', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img7']]},

    // 200 - 399
    200:{'first': '0', 'sec': '2', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img2', 'img16']]},
    201:{'first': '0', 'sec': '2', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img2', 'img16']]},
    202:{'first': '0', 'sec': '2', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img11', 'img16']]},
    203:{'first': '0', 'sec': '7', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img1', 'img16']]},
    204:{'first': '1', 'sec': '0', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img10', 'img20']]},
    205:{'first': '1', 'sec': '1', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img4', 'img17']]},
    206:{'first': '1', 'sec': '2', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img6', 'img8']]},
    207:{'first': '1', 'sec': '2', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img10', 'img17']]},
    208:{'first': '1', 'sec': '3', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img7', 'img5']]},
    209:{'first': '1', 'sec': '5', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img4', 'img17']]},
    210:{'first': '1', 'sec': '7', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img21', 'img4']]},
    211:{'first': '1', 'sec': '7', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img21', 'img17']]},
    212:{'first': '1', 'sec': '8', 'op': '+', 'res': '0', 'mode': 'move', 'sol': [['img10', 'img25']]},
    213:{'first': '1', 'sec': '8', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img10', 'img4']]},
    214:{'first': '1', 'sec': '9', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img7', 'img17']]},
    215:{'first': '1', 'sec': '9', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img7', 'img4']]},
    216:{'first': '2', 'sec': '1', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img10', 'img12']]},
    217:{'first': '2', 'sec': '1', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img1', 'img3']]},
    218:{'first': '2', 'sec': '3', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img1', 'img3']]},
    219:{'first': '2', 'sec': '3', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img10', 'img4']]},
    220:{'first': '2', 'sec': '4', 'op': '+', 'res': '0', 'mode': 'move', 'sol': [['img11', 'img25']]},
    221:{'first': '2', 'sec': '4', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img11', 'img4']]},
    222:{'first': '2', 'sec': '7', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img10', 'img11']]},
    223:{'first': '3', 'sec': '1', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img2', 'img0']]},
    224:{'first': '3', 'sec': '2', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img3', 'img1']]},
    225:{'first': '3', 'sec': '3', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img2', 'img0']]},
    226:{'first': '3', 'sec': '5', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img5', 'img7']]},
    227:{'first': '3', 'sec': '6', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img3', 'img1']]},
    228:{'first': '3', 'sec': '7', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img4', 'img0']]},
    229:{'first': '3', 'sec': '9', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img7', 'img11']]},
    230:{'first': '4', 'sec': '1', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img10', 'img12']]},
    231:{'first': '4', 'sec': '1', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img10', 'img4']]},
    232:{'first': '4', 'sec': '2', 'op': '+', 'res': '0', 'mode': 'move', 'sol': [['img11', 'img25']]},
    233:{'first': '4', 'sec': '2', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img11', 'img4']]},
    234:{'first': '4', 'sec': '3', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img8', 'img6']]},
    235:{'first': '4', 'sec': '3', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img8', 'img6']]},
    236:{'first': '4', 'sec': '5', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img10', 'img11']]},
    237:{'first': '5', 'sec': '1', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img0', 'img2']]},
    238:{'first': '5', 'sec': '1', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img10', 'img1']]},
    239:{'first': '5', 'sec': '2', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img4', 'img1']]},
    240:{'first': '5', 'sec': '2', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img6', 'img8']]},
    241:{'first': '5', 'sec': '4', 'op': '+', 'res': '0', 'mode': 'move', 'sol': [['img10', 'img25']]},
    242:{'first': '5', 'sec': '4', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img10', 'img4']]},
    243:{'first': '5', 'sec': '5', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img5', 'img7']]},
    244:{'first': '5', 'sec': '7', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img4', 'img2']]},
    245:{'first': '5', 'sec': '7', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img21', 'img4']]},
    246:{'first': '5', 'sec': '9', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img5', 'img11']]},
    247:{'first': '5', 'sec': '9', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img5', 'img2']]},
    248:{'first': '6', 'sec': '1', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img1', 'img4']]},
    249:{'first': '6', 'sec': '2', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img11', 'img2']]},
    250:{'first': '6', 'sec': '3', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img10', 'img12']]},
    251:{'first': '6', 'sec': '7', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img1', 'img2']]},
    252:{'first': '7', 'sec': '1', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img17', 'img4']]},
    253:{'first': '7', 'sec': '2', 'op': '+', 'res': '0', 'mode': 'move', 'sol': [['img10', 'img25']]},
    254:{'first': '7', 'sec': '2', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img6', 'img8']]},
    255:{'first': '7', 'sec': '2', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img10', 'img4']]},
    256:{'first': '7', 'sec': '3', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img7', 'img5']]},
    257:{'first': '7', 'sec': '5', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img17', 'img4']]},
    258:{'first': '8', 'sec': '1', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img1', 'img21']]},
    259:{'first': '8', 'sec': '1', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img10', 'img11']]},
    260:{'first': '8', 'sec': '1', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img1', 'img11']]},
    261:{'first': '8', 'sec': '2', 'op': '+', 'res': '0', 'mode': 'move', 'sol': [['img2', 'img25']]},
    262:{'first': '8', 'sec': '2', 'op': '-', 'res': '0', 'mode': 'move', 'sol': [['img11', 'img25']]},
    263:{'first': '8', 'sec': '2', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img2', 'img4']]},
    264:{'first': '8', 'sec': '3', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img8', 'img6']]},
    265:{'first': '8', 'sec': '5', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img10', 'img12']]},
    266:{'first': '9', 'sec': '1', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img4', 'img21']]},
    267:{'first': '9', 'sec': '1', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img4', 'img11']]},
    268:{'first': '9', 'sec': '1', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img2', 'img4']]},
    269:{'first': '9', 'sec': '2', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img2', 'img1']]},
    270:{'first': '9', 'sec': '2', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img2', 'img1']]},
    271:{'first': '9', 'sec': '2', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img11', 'img1']]},
    272:{'first': '9', 'sec': '3', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img2', 'img11']]},
    273:{'first': '9', 'sec': '5', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img0', 'img11']]},
    274:{'first': '9', 'sec': '5', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img5', 'img7']]},
    275:{'first': '9', 'sec': '7', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img21', 'img11']]},

    //400 - 599

    400:{'first': '0', 'sec': '1', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img1', 'img4', 'img16', 'img21']]},
    401:{'first': '0', 'sec': '1', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img1', 'img4', 'img16', 'img11']]},
    402:{'first': '0', 'sec': '1', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img1', 'img2', 'img16', 'img4']]},
    403:{'first': '0', 'sec': '2', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img0', 'img3', 'img16', 'img4']]},
    404:{'first': '0', 'sec': '3', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img2', 'img10', 'img16', 'img12']]},
    405:{'first': '0', 'sec': '5', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img0', 'img1', 'img16', 'img11']]},
    406:{'first': '0', 'sec': '7', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img21', 'img10', 'img16', 'img11']]},
    407:{'first': '0', 'sec': '7', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img1', 'img21', 'img16', 'img11']]},
    408:{'first': '1', 'sec': '1', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img9', 'img12', 'img11', 'img4']]},
    409:{'first': '1', 'sec': '2', 'op': '-', 'res': '0', 'mode': 'move', 'sol': [['img9', 'img10', 'img25', 'img4'], ['img10', 'img11', 'img17', 'img25']]},
    410:{'first': '1', 'sec': '2', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img6', 'img4', 'img17', 'img8']]},
    411:{'first': '1', 'sec': '3', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img20', 'img22', 'img11', 'img4'], ['img8', 'img10', 'img17', 'img6']]},
    412:{'first': '1', 'sec': '4', 'op': '+', 'res': '0', 'mode': 'move', 'sol': [['img5', 'img20', 'img17', 'img25']]},
    413:{'first': '1', 'sec': '4', 'op': '-', 'res': '0', 'mode': 'move', 'sol': [['img10', 'img11', 'img25', 'img4'], ['img9', 'img10', 'img17', 'img25']]},
    414:{'first': '1', 'sec': '5', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img9', 'img12', 'img17', 'img11']]},
    415:{'first': '1', 'sec': '9', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img7', 'img11', 'img9', 'img12']]},
    416:{'first': '2', 'sec': '0', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img5', 'img8', 'img20', 'img4']]},
    417:{'first': '2', 'sec': '1', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img1', 'img2', 'img0', 'img3']]},
    418:{'first': '2', 'sec': '1', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img9', 'img10', 'img11', 'img4'], ['img2', 'img10', 'img0', 'img3']]},
    419:{'first': '2', 'sec': '2', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img11', 'img4', 'img0', 'img3']]},
    420:{'first': '2', 'sec': '3', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img1', 'img2', 'img0', 'img3']]},
    421:{'first': '2', 'sec': '5', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img5', 'img10', 'img7', 'img4'], ['img21', 'img22', 'img7', 'img4']]},
    422:{'first': '2', 'sec': '6', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img5', 'img8', 'img6', 'img7']]},
    423:{'first': '2', 'sec': '7', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img1', 'img4', 'img0', 'img3']]},
    424:{'first': '2', 'sec': '7', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img21', 'img10', 'img12', 'img4']]},
    425:{'first': '2', 'sec': '9', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img1', 'img7', 'img3', 'img11']]},
    426:{'first': '3', 'sec': '1', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img3', 'img10', 'img1', 'img12'], ['img16', 'img18', 'img9', 'img12']]},
    427:{'first': '3', 'sec': '2', 'op': '-', 'res': '0', 'mode': 'move', 'sol': [['img10', 'img11', 'img25', 'img4']]},
    428:{'first': '3', 'sec': '2', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img2', 'img4', 'img0', 'img1'], ['img16', 'img18', 'img26', 'img27']]},
    429:{'first': '3', 'sec': '3', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img8', 'img10', 'img6', 'img4'], ['img3', 'img10', 'img1', 'img4']]},
    430:{'first': '3', 'sec': '5', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img2', 'img5', 'img0', 'img7']]},
    431:{'first': '3', 'sec': '7', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img2', 'img21', 'img0', 'img4'], ['img9', 'img12', 'img0', 'img11']]},
    432:{'first': '4', 'sec': '1', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img0', 'img16', 'img21', 'img11']]},
    433:{'first': '4', 'sec': '3', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img2', 'img4', 'img17', 'img18']]},
    434:{'first': '4', 'sec': '3', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img20', 'img22', 'img17', 'img18']]},
    435:{'first': '4', 'sec': '3', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img21', 'img22', 'img5', 'img11'], ['img7', 'img10', 'img5', 'img11']]},
    436:{'first': '4', 'sec': '4', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img10', 'img11', 'img17', 'img18'], ['img5', 'img20', 'img17', 'img18']]},
    437:{'first': '4', 'sec': '5', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img5', 'img8', 'img6', 'img7']]},
    438:{'first': '4', 'sec': '5', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img5', 'img8', 'img6', 'img7'], ['img21', 'img22', 'img7', 'img11']]},
    439:{'first': '4', 'sec': '6', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img0', 'img10', 'img17', 'img18']]},
    440:{'first': '4', 'sec': '6', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img9', 'img10', 'img17', 'img18']]},
    441:{'first': '4', 'sec': '7', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img0', 'img16', 'img9', 'img12']]},
    442:{'first': '4', 'sec': '7', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img0', 'img21', 'img17', 'img18']]},
    443:{'first': '4', 'sec': '7', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img2', 'img21', 'img17', 'img18']]},
    444:{'first': '4', 'sec': '7', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img0', 'img16', 'img11', 'img4']]},
    445:{'first': '4', 'sec': '8', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img6', 'img7', 'img26', 'img27'], ['img0', 'img16', 'img26', 'img27']]},
    446:{'first': '4', 'sec': '8', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img9', 'img25', 'img17', 'img18'], ['img6', 'img7', 'img17', 'img18']]},
    447:{'first': '4', 'sec': '9', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img21', 'img22', 'img9', 'img12'], ['img7', 'img10', 'img9', 'img12']]},
    448:{'first': '4', 'sec': '9', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img2', 'img5', 'img17', 'img18']]},
    449:{'first': '5', 'sec': '2', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img9', 'img4', 'img26', 'img27'], ['img0', 'img3', 'img1', 'img2']]},
    450:{'first': '5', 'sec': '2', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img6', 'img10', 'img1', 'img8'], ['img11', 'img4', 'img1', 'img2']]},
    451:{'first': '5', 'sec': '2', 'op': '-', 'res': '8', 'mode': 'move', 'sol': [['img6', 'img11', 'img2', 'img8']]},
    452:{'first': '5', 'sec': '3', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img10', 'img4', 'img1', 'img12']]},
    453:{'first': '5', 'sec': '5', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img21', 'img22', 'img1', 'img7']]},
    454:{'first': '5', 'sec': '6', 'op': '-', 'res': '0', 'mode': 'move', 'sol': [['img9', 'img10', 'img2', 'img25']]},
    455:{'first': '5', 'sec': '7', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img21', 'img11', 'img9', 'img12']]},
    456:{'first': '5', 'sec': '7', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img21', 'img4', 'img2', 'img11']]},
    457:{'first': '5', 'sec': '7', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img9', 'img12', 'img2', 'img11']]},
    458:{'first': '6', 'sec': '1', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img1', 'img11', 'img9', 'img12'], ['img1', 'img4', 'img2', 'img21']]},
    459:{'first': '6', 'sec': '1', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img10', 'img11', 'img9', 'img12']]},
    460:{'first': '6', 'sec': '1', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img1', 'img4', 'img2', 'img11']]},
    461:{'first': '6', 'sec': '3', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img0', 'img1', 'img2', 'img4']]},
    462:{'first': '6', 'sec': '4', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img5', 'img10', 'img21', 'img22'], ['img1', 'img5', 'img21', 'img22']]},
    463:{'first': '6', 'sec': '5', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img10', 'img4', 'img2', 'img12']]},
    464:{'first': '6', 'sec': '6', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img5', 'img8', 'img6', 'img7']]},
    465:{'first': '6', 'sec': '7', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img21', 'img10', 'img2', 'img11']]},
    466:{'first': '6', 'sec': '7', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img1', 'img21', 'img2', 'img11']]},
    467:{'first': '6', 'sec': '8', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img5', 'img6', 'img26', 'img27']]},
    468:{'first': '6', 'sec': '9', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img7', 'img10', 'img2', 'img12']]},
    469:{'first': '7', 'sec': '0', 'op': '+', 'res': '0', 'mode': 'move', 'sol': [['img17', 'img10', 'img20', 'img25']]},
    470:{'first': '7', 'sec': '1', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img11', 'img4', 'img9', 'img12']]},
    471:{'first': '7', 'sec': '2', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img17', 'img6', 'img8', 'img4'], ['img9', 'img25', 'img16', 'img18']]},
    472:{'first': '7', 'sec': '3', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img8', 'img10', 'img6', 'img11']]},
    473:{'first': '7', 'sec': '3', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img17', 'img7', 'img5', 'img4']]},
    474:{'first': '7', 'sec': '4', 'op': '-', 'res': '0', 'mode': 'move', 'sol': [['img5', 'img20', 'img25', 'img4']]},
    475:{'first': '7', 'sec': '5', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img17', 'img11', 'img9', 'img12']]},
    476:{'first': '7', 'sec': '6', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img17', 'img10', 'img6', 'img7']]},
    477:{'first': '7', 'sec': '7', 'op': '-', 'res': '2', 'mode': 'move', 'sol': [['img21', 'img11', 'img9', 'img12']]},
    478:{'first': '7', 'sec': '8', 'op': '+', 'res': '8', 'mode': 'move', 'sol': [['img6', 'img7', 'img16', 'img18']]},
    479:{'first': '7', 'sec': '9', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img17', 'img10', 'img6', 'img11']]},
    480:{'first': '8', 'sec': '1', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img0', 'img3', 'img5', 'img20']]},
    481:{'first': '8', 'sec': '1', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img1', 'img10', 'img5', 'img20']]},
    482:{'first': '8', 'sec': '4', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img5', 'img20', 'img26', 'img27'], ['img1', 'img2', 'img26', 'img27']]},
    483:{'first': '8', 'sec': '5', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img0', 'img1', 'img9', 'img12']]},
    484:{'first': '8', 'sec': '6', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img0', 'img1', 'img26', 'img27']]},
    485:{'first': '8', 'sec': '6', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img1', 'img9', 'img26', 'img27']]},
    486:{'first': '8', 'sec': '7', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img21', 'img10', 'img9', 'img12']]},
    487:{'first': '8', 'sec': '7', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img21', 'img10', 'img11', 'img4']]},
    488:{'first': '9', 'sec': '1', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img2', 'img11', 'img9', 'img12']]},
    489:{'first': '9', 'sec': '1', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img10', 'img4', 'img5', 'img20']]},
    490:{'first': '9', 'sec': '1', 'op': '-', 'res': '6', 'mode': 'move', 'sol': [['img9', 'img12', 'img21', 'img11']]},
    491:{'first': '9', 'sec': '4', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img11', 'img4', 'img26', 'img27'], ['img7', 'img4', 'img21', 'img22']]},
    492:{'first': '9', 'sec': '5', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img10', 'img4', 'img1', 'img12']]},
    493:{'first': '9', 'sec': '6', 'op': '+', 'res': '4', 'mode': 'move', 'sol': [['img9', 'img4', 'img26', 'img27']]},
    494:{'first': '9', 'sec': '6', 'op': '-', 'res': '4', 'mode': 'move', 'sol': [['img9', 'img25', 'img6', 'img7']]},
    495:{'first': '9', 'sec': '7', 'op': '+', 'res': '2', 'mode': 'move', 'sol': [['img21', 'img4', 'img9', 'img12'], ['img2', 'img4', 'img20', 'img22']]},
    496:{'first': '9', 'sec': '7', 'op': '+', 'res': '6', 'mode': 'move', 'sol': [['img21', 'img10', 'img1', 'img11']]},

};