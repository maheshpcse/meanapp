const { Model } = require('objection');

class Appointment extends Model {
    static get tableName() {
        return 'appointment';
    }

    static get idColumn() {
        return 'app_id ';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                app_id : { type: ['integer', null] },
                appointment_id: { type: ['string', null] },
                user_id: { type: ['integer', null] },
                date: { type: ['string', 'date', null] },
                description: { type: ['string', null] },
                issued_by: { type: ['string', null] },
                status: { type: ['integer', 'number', null] },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        }
    }
}

module.exports = Appointment;