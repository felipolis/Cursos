import { PrismaClient } from '@prisma/client'
import Joi from 'joi'

const prisma = new PrismaClient()

const schema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().min(1886).max(new Date().getFullYear() + 1).required(),
    miles: Joi.number().min(0).required(),
    city: Joi.string().min(2).required(),
    numberOfSeats: Joi.number().min(1).max(1000).required(),
    features: Joi.array().items(Joi.string()).required(),
    image: Joi.string().required(),
    listerId: Joi.string().required(),
    price: Joi.number().min(0).required(),
    name: Joi.string().required(),
    description: Joi.string().min(20).required(),
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { error, value } = schema.validate(body)

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message,
        })
    }

    const {
        make,
        model,
        year,
        miles,
        city,
        numberOfSeats,
        features,
        image,
        listerId,
        price,
        name,
        description,
    } = body

    const car = await prisma.car.create({
        data: {
            make,
            model,
            year,
            miles,
            city: city.toLowerCase(),
            numberOfSeats,
            features,
            image,
            listerId,
            price,
            name,
            description,
        }
    })

    return car
})