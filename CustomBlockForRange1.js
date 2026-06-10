Blockly.Blocks['playmusicnote'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/music_player.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Play music note')
      .appendField(
        new Blockly.FieldDropdown([
          ['C', 'C'],
          ['C#', 'C#'],
          ['D', 'D'],
          ['D#', 'D#'],
          ['E', 'E'],
          ['F', 'F'],
          ['F#', 'F#'],
          ['G', 'G'],
          ['G#', 'G#'],
          ['A', 'A'],
          ['A#', 'A#'],
          ['B', 'B'],
        ]),
        'Note',
      )
      .appendField('for');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['rgb_led'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/rgb_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('RGB LED light color')
      .appendField(new Blockly.FieldColour('#00cccc'), 'color_left')
      .appendField(new Blockly.FieldColour('#00cccc'), 'color_right')
      .appendField('for');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['robot_move'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
      new Blockly.FieldDropdown([
        ['Forward', 'FORWARD'],
        ['Backward', 'BACKWARD'],
        ['Turn Left', 'TURNLEFT'],
        ['Turn Right', 'TURNRIGHT'],
      ]),
      'Direction',
      )
      .appendField('with speed')
      .appendField(new CustomFields.FieldVelocity(0, 0, 255, 1), 'Velocity')
      .appendField('for');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['robot_continue_move'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
      new Blockly.FieldDropdown([
        ['Forward', 'FORWARD'],
        ['Backward', 'BACKWARD'],
        ['Turn Left', 'TURNLEFT'],
        ['Turn Right', 'TURNRIGHT'],
      ]),
      'Direction',
      )
      .appendField('with speed')
      .appendField(new CustomFields.FieldVelocity(0, 0, 255, 1), 'Velocity')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(295);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['playwithmatrix'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
      new Blockly.FieldImage('Utils/BlockIcon/dot_matrix.png', 30, 30, {
        alt: '*',
        flipRtl: 'FALSE',
      }),
      )
      .appendField('Matrix LED at')
      .appendField(
      new Blockly.FieldDropdown([
        ['Port 1', 'Port 1'],
        ['Port 2', 'Port 2'],
        ['Port 3', 'Port 3'],
        ['Port 4', 'Port 4'],
      ]),
      'Port',
      )
      .appendField('displays')
      .appendField(new CustomFields.FieldMatrix(), 'Map')
      .appendField('for');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['field_ledSegments'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/dot_matrix.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('7-segment LED display')
      .appendField(new CustomFields.FieldSegmentLed(), 'Map')
      .appendField('for');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['playwithmatrixledchar'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/dot_matrix.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Matrix LED at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 4', 'Port 4'],
        ]),
        'Port',
      )
      .appendField('displays character')
      .appendField(new Blockly.FieldTextInput('A'), 'char')
      .appendField('for')
      .appendField(new CustomFields.FieldCalculate(0, 0, 255, 1), 'Duration')
      .appendField('seconds');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['matrixlebspecialchar'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/dot_matrix.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Matrix LED at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 4', 'Port 4'],
        ]),
        'Port',
      )
      .appendField('displays')
      .appendField(
        new Blockly.FieldDropdown([
          [
            {
              src: 'Utils/BlockIcon/arrow_l2r.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'arrowl2r',
          ],
          [
            {
              src: 'Utils/BlockIcon/arrow_r2l.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'arrowr2l',
          ],
          [
            {
              src: 'Utils/BlockIcon/arrow_up.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'arrow_up',
          ],
          [
            {
              src: 'Utils/BlockIcon/arrow_down.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'arrow_down',
          ],
          [
            {
              src: 'Utils/BlockIcon/heart.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'heart',
          ],
          [
            {
              src: 'Utils/BlockIcon/smile.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'smile',
          ],
          [
            {
              src: 'Utils/BlockIcon/cute_star.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'star',
          ],
          [
            {
              src: 'Utils/BlockIcon/effect_1.gif',
              width: 15,
              height: 15,
              alt: '*',
            },
            'effect_1',
          ],
          [
            {
              src: 'Utils/BlockIcon/effect_2.gif',
              width: 15,
              height: 15,
              alt: '*',
            },
            'effect_2',
          ],
          [
            {
              src: 'Utils/BlockIcon/effect_3.gif',
              width: 15,
              height: 15,
              alt: '*',
            },
            'effect_3',
          ],
        ]),
        'NAME',
      )
      .appendField('for')
      .appendField(new CustomFields.FieldCalculate(0, 0, 255, 1), 'Duration')
      .appendField('seconds');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['turnoffledrbg'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/rgb_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('RGB LED')
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/light_on.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/arrow_l2r.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/light_off.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['ringled'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/ring_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Ring LED at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 5', 'Port 5'],
        ]),
        'ringLedModule',
      )
      .appendField('lights up as')
      .appendField(new CustomFields.FieldRing(), 'LED');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['servo'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Servo')
      .appendField(
        new Blockly.FieldDropdown([
          [
            {
              src: 'Utils/BlockIcon/left_servo.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Servo_1',
          ],
          [
            {
              src: 'Utils/BlockIcon/right_servo.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Servo_2',
          ],
          [
            {
              src: 'Utils/BlockIcon/both_servo.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Both',
          ],
        ]),
        'Servo_Select',
      )
      .appendField('rotates to angle')
      .appendField(new Blockly.FieldAngle(90), 'Angle');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['motorselect'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Motor')
      .appendField(
        new Blockly.FieldDropdown([
          [
            {
              src: 'Utils/BlockIcon/left_motor.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Left',
          ],
          [
            {
              src: 'Utils/BlockIcon/right_motor.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Right',
          ],
          [
            {
              src: 'Utils/BlockIcon/both_motor.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Both',
          ],
        ]),
        'MotorSelect',
      )
      .appendField('rotates with speed')
      .appendField(new CustomFields.FieldVelocity(1, 1, 255, 1), 'velocity');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['two_motor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Left Motor')
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/left_motor.png', 15, 15, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('speed')
      .appendField(new CustomFields.FieldVelocity(1, 1, 255, 1), 'LeftVel')
      .appendField('%, duration ');
    this.appendValueInput('LeftDuration');
    this.appendDummyInput()
      .appendField('Right Motor')
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/right_motor.png', 15, 15, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('speed')
      .appendField(new CustomFields.FieldVelocity(1, 1, 255, 1), 'RightVel')
      .appendField('% duration');
    this.appendValueInput('RightDuration');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['srf05'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/object_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Distance to obstacle measured using sensor at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 4', 'Port 4'],
        ]),
        'port',
      );
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['light_sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/light_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Light intensity measured using sensor at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 5', 'Port 5'],
        ]),
        'Port',
      );
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['colorsensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/color_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Color detected using sensor at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 6', 'Port 6'],
        ]),
        'Port',
      );
    this.setOutput(true, null);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['sound_sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/sound_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Sound detected using sensor at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 7', 'Port 7'],
        ]),
        'Port',
      )
      .appendField('to detect sound');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['path_detecter'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/path_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Path detected using sensor at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 8', 'Port 8'],
        ]),
        'Port',
      );
    this.appendDummyInput()
      .appendField('on side')
      .appendField(
        new Blockly.FieldDropdown([
          ['left', 'left'],
          ['right', 'right'],
        ]),
        'side',
      )
      .appendField('with color')
      .appendField(
        new Blockly.FieldDropdown([
          ['white', 'white'],
          ['black', 'black'],
        ]),
        'color',
      );
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['dummy_start_block'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('Press button')
      .appendField(
        new Blockly.FieldImage('Utils/Icon/png/Start.png', 50, 50, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('to start the program');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setDeletable(false);
    this.setMovable(false);
  },
};

Blockly.Blocks['dummy_play_block'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('Press button')
      .appendField(
        new Blockly.FieldImage('Utils/Icon/png/Start.png', 50, 50, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('to start the program');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setDeletable(false);
    this.setMovable(false);
  },
};

Blockly.Blocks['if_block'] = {
  init: function () {
    this.appendValueInput('condition').setCheck('Boolean').appendField('If');
    this.appendStatementInput('if block')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('Then');
    this.appendStatementInput('else block')
      .setCheck(null)
      .appendField('Else');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};


Blockly.Blocks['if1'] = {
  init: function () {
    this.appendValueInput('condition').setCheck('Boolean').appendField('If');
    this.appendStatementInput('command').setCheck(null).appendField('Then');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['break_continue_loop'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['continue loop', 'continue loop'],
        ['exit loop', 'exit loop'],
      ]),
      'action',
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['loop'] = {
  init: function () {
    this.appendStatementInput('command')
      .setCheck(null)
      .appendField('Execute');
    this.appendDummyInput()
      .appendField('repeat')
      .appendField(new CustomFields.FieldCalculate(0, 0, 100, 1), 'NAME')
      .appendField('times');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['stop_move'] = {
  init: function () {
    this.appendDummyInput().appendField('Stop motor');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['create_function'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('To')
      .appendField(new Blockly.FieldTextInput('move'), 'Function_name');
    this.appendStatementInput('NAME').setCheck(null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['test_pitch_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('pitch')
      .appendField(new CustomFields.FieldPitch('7'), 'PITCH');
    this.setStyle('loop_blocks');
  },
};

Blockly.Blocks['while'] = {
  init: function () {
    this.appendStatementInput('actions')
      .setCheck(null)
      .appendField('Execute continuously');
    this.setColour(285);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['test_cal_field'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new CustomFields.FieldCalculate(0, 0, 1000, 1),
      'NAME',
    );
    this.setColour(285);
  },
};

Blockly.Blocks['test_vel_field'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new CustomFields.FieldVelocity(0, 0, 1000, 1),
      'NAME',
    );
    this.setColour(285);
  },
};

Blockly.Blocks['field_matrix'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new CustomFields.FieldMatrix(1, 16),
      'NAME',
    );
    this.setColour(285);
  },
};

Blockly.Blocks['field_ring'] = {
  init: function () {
    this.appendDummyInput().appendField(new CustomFields.FieldRing(), 'NAME');
    this.setColour(285);
  },
};

Blockly.Blocks['relay'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/relay.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Control Relay')
      .appendField(
        new Blockly.FieldDropdown([
          ['Close', 'true'],
          ['Open', 'false'],
        ]),
        'replayState',
      )
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['single_led'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/rgb_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Control LED')
      .appendField(
        new Blockly.FieldDropdown([
          [
            {
              src: 'Utils/BlockIcon/light_on.png',
              width: 30,
              height: 30,
              alt: 'On',
            },
            'true',
          ],
          [
            {
              src: 'Utils/BlockIcon/light_off.png',
              width: 30,
              height: 30,
              alt: 'Off',
            },
            'false',
          ],
        ]),
        'singleLedState',
      )
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['traffic_light'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/rgb_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Control Traffic Light')
      .appendField(new CustomFields.FieldTrafficLight(), 'Lights')
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['keyboard'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/sound_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Key')
      .appendField(
        new CustomFields.FieldKeyboard(),
        'Key',
      )
      .appendField('is pressed');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['calculator'] = {
  init: function () {
    this.appendDummyInput().appendField(new CustomFields.FieldCalculate(1, 0, 1000, 1), 'Value');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['wait_until'] = {
  init: function () {
    this.appendValueInput("condition")
      .appendField("Wait until")
      .setCheck("Boolean");
    this.setColour(285);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};



//=============== Sensor for Board IoT====================//
Blockly.Blocks['srf05_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/object_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Distance to obstacle measured using sensor at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 1', 'Pin 15'],
        ]),
        'pin1'
      )

      .appendField(' and ')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 2', 'Pin 16'],
        ]),
        'pin2'
      );

      
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['temperature_sensor'] = {
  init: function () {

    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(
          'Utils/BlockIcon/Nhiet_do.png',
          30,
          30,
          {
            alt: '*',
            flipRtl: 'FALSE'
          }
        )
      )

      .appendField(
        new Blockly.FieldDropdown([
          ['Temperature', 'Temp'],
          ['Humidity', 'Hum'],
        ]),
        'typeSensor'
      )

      .appendField(' sensor at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 5', 'Pin 5']
        ]),
        'pin'
      );

    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('Get temperature value (°C)');
    this.setHelpUrl('');
  },
};


Blockly.Blocks['infread_sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/infread_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Infread sensor at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 3', 'Pin 3']
        ]),
        'pin',
      )
      
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['rain_sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/rain_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Rain sensor ')
      .appendField('mode ')
      .appendField(
        new Blockly.FieldDropdown([
        ['Digital', 'Digital'],
        ['Analog', 'Analog'],
      ]),
      'mode',
      )
      .appendField(' at ')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 11', 'Pin 11']
        ]),
        'pin',
      )
      
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['gas_sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/gas_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Gas sensor ')
      .appendField('mode ')
      .appendField(
        new Blockly.FieldDropdown([
        ['Digital', 'Digital'],
        ['Analog', 'Analog'],
      ]),
      'mode',
      )
      .appendField(' at ')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 2', 'Pin 2']
        ]),
        'pin',
      )
      
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['motion_sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/motion_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Motion sensor at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 3', 'Pin 3']
        ]),
        'pin',
      )
      
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['soil_sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/soil_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      
      .appendField('Soil sensor ')
      .appendField('mode ')
      .appendField(
        new Blockly.FieldDropdown([
        ['Digital', 'Digital'],
        ['Analog', 'Analog'],
      ]),
      'mode',
      )

      .appendField(' at ')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 40', 'Pin 40']
        ]),
        'pin',
      )
      
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['light_sensor_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/light_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )

      .appendField('Light sensor ')
      .appendField('mode ')
      .appendField(
        new Blockly.FieldDropdown([
        ['Digital', 'Digital'],
        ['Analog', 'Analog'],
      ]),
      'mode',
      )

      .appendField(' at ')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 17', 'Pin 17']
        ]),
        'pin',
      );

    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['sound_sensor_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/sound_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Sound detected using sensor at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 46', 'Pin 46']
        ]),
        'pin',
      )
      .appendField('to detect sound');
      
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};





//=========Các cơ cấu chấp hành cho Board IoT==============//
Blockly.Blocks['Field_ledSegments_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/dot_matrix.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('7-segment LED display')
      .appendField(new CustomFields.FieldSegmentLed(), 'Map')
      .appendField('for');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['Relay_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/relay.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Control Relay')
      .appendField(
        new Blockly.FieldDropdown([
          ['Close', 'true'],
          ['Open', 'false'],
        ]),
        'replayState',
      )
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['Lcd_display_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/lcd.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('LCD display at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 8', 'Pin 8'],
        ]),
        'pin1'
      )

      .appendField(' and ')

      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 9', 'Pin 9'],
        ]),
        'pin2'
      );

    this.appendValueInput('TEXT')
      .appendField('show text');

    this.appendDummyInput()
      .appendField('at row')
      .appendField(
        new Blockly.FieldDropdown([
          ['Row 1', '0'],
          ['Row 2', '1'],
        ]),
        'ROW'
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
  },
};

Blockly.Blocks['Oled_display_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/oled.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('OLED display at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 8', 'Pin 8'],
        ]),
        'pin1'
      )

      .appendField(' and ')

      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 9', 'Pin 9'],
        ]),
        'pin2'
      );

    this.appendValueInput('TEXT')
      .appendField('show text');

    this.appendDummyInput()
      .appendField('at X')
      .appendField(new Blockly.FieldNumber(0, 0, 127), 'X')
      .appendField('Y')
      .appendField(new Blockly.FieldNumber(0, 0, 63), 'Y');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('Display text on OLED');
  },
};

Blockly.Blocks['Motor_control_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/motor2.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Control motor at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 41', 'Pin 41'],
        ]),
        'pin1'
      )

      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 42', 'Pin 42'],
        ]),
        'pin2'
      )

      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 40', 'Pin 40'],
        ]),
        'pin3'
      );

      this.appendValueInput('SPEED')
      .appendField('speed');

    this.appendValueInput('TIME')
      .appendField('beep for (seconds)');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
  },
};

Blockly.Blocks['Servo_control_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/servo1.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Control Servo at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Pin 14', 'Pin 14'],
        ]),
        'pin'
      );

      this.appendValueInput('ANGEL')
      .appendField('angel');

      this.appendValueInput('TIME')
      .appendField('beep for (seconds)');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
  },
};

Blockly.Blocks['Text_input_IoT'] = {
  init: function () {

    this.appendDummyInput()
      .appendField('Text')
      .appendField(
        new Blockly.FieldTextInput('hello'),
        'TEXT'
      );

    this.setOutput(true, null);

    this.setColour(230);
  },
};

Blockly.Blocks['Buzzer_beep_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/buzzer.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Buzzer at')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 4', 'Port 4'],
        ]),
        'Port'
      );

    this.appendValueInput('TIME')
      .appendField('beep for (seconds)');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
  },
};


Blockly.Blocks['Single_led_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/rgb_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Control LED')
      .appendField(
        new Blockly.FieldDropdown([
          [
            {
              src: 'Utils/BlockIcon/light_on.png',
              width: 30,
              height: 30,
              alt: 'On',
            },
            'true',
          ],
          [
            {
              src: 'Utils/BlockIcon/light_off.png',
              width: 30,
              height: 30,
              alt: 'Off',
            },
            'false',
          ],
        ]),
        'singleLedState',
      )
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['RGB_led_IoT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/rgb_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('RGB LED light color')
      .appendField(new Blockly.FieldColour('#00cccc'), 'color_left')
      .appendField(new Blockly.FieldColour('#00cccc'), 'color_right')
      .appendField('for');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

