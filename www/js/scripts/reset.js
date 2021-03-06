
Theta.reset = function (ptp) {
    'use strict';

    var stage1, stage2;

    stage2 = function (onDone) {
        ptp.setDeviceProperty({
            code: 0x502c,
            data: ptp.dataFactory.createDword(100),
            onSuccess: onDone,
            onFailure: onDone
        });
    };

    stage1 = function (onDone) {
        ptp.setDeviceProperty({
            code: ptp.devicePropCodes.exposureBiasCompensation,
            data: ptp.dataFactory.createWord(0),
            onSuccess: function () {
                stage2(onDone);
            },
            onFailure: onDone
        });
    };

    return stage1;
});
