const HistOnOff = require('../models/HistOnOff')
const { Op } = require("sequelize")
const moment = require('moment')
const axios = require('axios');

exports.getHistory = async (req, res) => {
    try {
        console.log('tes')
        const hist = await HistOnOff.findAll({
            where: {
                cek: 1
            }
        })

        var msg = ''

        if (hist) {
            hist.forEach(h => {
                if (h.ket == 'start') {
                    msg = '🟢 _JAMER SKN-NGF_\n     *START POMPA*'
                } else {
                    msg = '🔴 _JAMER SKN-NGF_\n     *STOP POMPA*'
                }
            });

            const response = await axios.post('https://folpertaminafieldjambi.com/api/sendToDB', {
                message: "🟢 _JAMER SKN-NGF_\n     *START POMPA*",
                target: "120363288603708376@g.us"
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log("✅ Data berhasil dikirim:");
        }
    } catch (error) {
        console.log(error.message)
    }
}