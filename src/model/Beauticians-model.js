const { Model } = require('objection');

class Beauticians extends Model {
    static get tableName() {
        return 'beauticians';
    }

    static get idColumn() {
        return 'beautician_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                beautician_id: { type: ['integer', null] },
                owner_id: { type: ['string', null] },
                beautician_name: { type: ['string', null] },
                experience: { type: ['integer', 'number', null] },
                parlour_name: { type: ['string', 'date', null] },
                law_firm_name: { type: ['string', null] },
                services: { type: ['string', null] },
                place: { type: ['string', null] },
                rating: { type: ['integer', 'number', null] },
                status: { type: ['integer', 'number', null] },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        }
    }
}

module.exports = Beauticians;