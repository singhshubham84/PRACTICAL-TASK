const cityRouteModel = require('../model/cityRoute')
const { validName, validNumber } = require('../validation/validation')



const cityRoute = async function (req, res) {
    try {
        let data = req.body
        let { cityName } = data
        if (!validName(cityName)) {
            return res.status(300).send({
                "code": "300", "msg": "city name contains numeric characters"
            })
        }
        const cityNameInDb = await cityRouteModel.findOne({ cityName: cityName })
        if (cityNameInDb) {
            return res.status(300).send({
                "code": "300", "msg": "city name already available"
            })
        }
        const cityData = await cityRouteModel.create(data)
        return res.status(201).send({ "code": 200, msg: "city name inserted", cityName: cityData })
    } catch (err) {
        return res.status(500).send({
            status: false, err: err.message
        })
    }
}

const getCityRoute = async function (req, res) {
    const allcityData = await cityRouteModel.find()
    return res.status(200).send({ cityName: allcityData })

}

const userRoute = async function (req, res) {
    try {
        let data = req.body
        let { name, cityName, mobile, mediaUrl } = data

        if (!validName(name)) {
            return res.status(300).send({
                "code": "300", "msg": " name should contains characters"
            })
        }
        if (!validName(cityName)) {
            return res.status(300).send({
                "code": "300", "msg": "city name contains numeric characters"
            })
        }
        const cityNameInDb = await cityRouteModel.findOne({ cityName: cityName })
        if (cityNameInDb) {
            return res.status(300).send({
                "code": "300", "msg": "city name already available"
            })
        }

        if (!validNumber(mobile)) {
            return res.status(300).send({
                "code": "300", "msg": "mobile number should contains numeric characters and 10 digit only"
            })
        }

        const createUserRoute = await cityRouteModel.create(data)
        return res.status(201).send({ "code": 201, msg: "user data created", userRoute: createUserRoute })

    } catch (err) {
        return res.status(500).send({
            status: false, err: err.message
        })
    }
}
const getUserRoute = async function (req, res) {
    const allUserData = await cityRouteModel.find()
    return res.status(200).send({ userData: allUserData })

}

const updateUserRoute = async function (req, res) {
    try {
        let userId = req.params.userId  // using mongodb id 

        let userData = await cityRouteModel.findOne({ _id: userId })
        if (!userData) {
            return res.status(400).send({ msg: "data is not available" })
        }
        let data = req.body
        let { name, cityName, mobile, mediaUrl } = data
        if (name) {
            if (!validName(name)) {
                return res.status(300).send({
                    "code": "300", "msg": " name should contains characters"
                })
            }
            userData.name = name;
        }
        if (cityName) {
            if (!validName(cityName)) {
                return res.status(300).send({
                    "code": "300", "msg": "city name contains numeric characters"
                })
            }
            const cityNameInDb = await cityRouteModel.findOne({ cityName: cityName })
            if (cityNameInDb) {
                return res.status(300).send({
                    "code": "300", "msg": "city name already available"
                })
            }
            userData.cityName = cityName
        }
        if (mobile) {
            if (!validNumber(mobile)) {
                return res.status(300).send({
                    "code": "300", "msg": "mobile number should contains numeric characters and 10 digit only"
                })
            }
            userData.mobile = mobile
        }
        if (mediaUrl) {
            userData.mediaUrl = mediaUrl
        }

        userData.save()
        return res.status(200).send({ "code": "200", msg: "user data updated", userData: userData })

    } catch (err) {
        return res.status(500).send({
            status: false, err: err.message
        })
    }
}

module.exports.cityRoute = cityRoute
module.exports.getCityRoute = getCityRoute
module.exports.userRoute = userRoute
module.exports.getUserRoute = getUserRoute
module.exports.updateUserRoute = updateUserRoute