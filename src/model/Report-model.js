const { Model } = require('objection');

class Report extends Model {
    static get tableName() {
        return 'report';
    }

    static get idColumn() {
        return 'report_id  ';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                report_id  : { type: ['integer', null] },
                appointment_id: { type: ['string', null] },
                date: { type: ['string', 'date', null] },
                amount: { type: ['string', null] },
                report: { type: ['string', null] },
                issued_by: { type: ['string', null] },
                status: { type: ['integer', 'number', null] },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        }
    }
}

module.exports = Report;