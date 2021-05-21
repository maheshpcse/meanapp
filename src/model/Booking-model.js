const { Model } = require('objection');

class Booking extends Model {
    static get tableName() {
        return 'booking';
    }

    static get idColumn() {
        return 'book_id  ';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                book_id  : { type: ['integer', null] },
                booking_id: { type: ['string', null] },
                user_id: { type: ['integer', null] },
                beautician_id: { type: ['integer', null] },
                law_firm_name: { type: ['string', null] },
                date: { type: ['string', 'date', null] },
                time: { type: ['string', 'time', null] },
                booking_status: { type: ['integer', 'number', null] },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        }
    }
}

module.exports = Booking;