let mockFirebase = jest.genMockFromModule('firebase');
mockFirebase.default = jest.fn();
mockFirebase.default.initializeApp = jest.fn();
module.exports = mockFirebase;