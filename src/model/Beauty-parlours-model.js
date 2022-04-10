const { Model } = require('objection');

class Beauty_parlours extends Model {
    static get tableName() {
        return 'beauty_parlours';
    }

    static get idColumn() {
        return 'beautician_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                beautician_id: { type: ['integer', null] },
                owner_id: { type: ['integer', 'number', null] },
                beautician_name: { type: ['string', null] },
                experience: { type: ['integer', 'number', null] },
                parlour_name: { type: ['string', 'date', null] },
                law_firm_name: { type: ['string', null] },
                services: { type: ['string', 'text', null] },
                start_time: { type: ['string', 'time', null] },
                end_time: { type: ['string', 'time', null] },
                users_limit: { type: ['integer', 'number', null] },
                place: { type: ['string', null] },
                rating: { type: ['integer', 'number', null] },
                status: { type: ['integer', 'number', null] },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        }
    }
}

module.exports = Beauty_parlours;