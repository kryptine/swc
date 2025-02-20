class ReusablePayments extends PureComponent {
    componentDidMount() {
        this.setDefaultReusablePayment();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.reusablePaymentSources !== this.props.reusablePaymentSources) {
            this.setDefaultReusablePayment();
        }
    }
    setDefaultReusablePayment(skipPaymentSource) {
        var _props = this.props, reusablePaymentSources = _props.reusablePaymentSources, selectedReusablePayment = _props.selectedReusablePayment, onChange = _props.onChange;
        var validReusablePaymentSources = reusablePaymentSources.filter((ps)=>ps.__typename === "StripePaymentSource" && ps !== skipPaymentSource
        );
        if (selectedReusablePayment === null) {
            return;
        }
        if (selectedReusablePayment && validReusablePaymentSources.find((ps)=>ps === selectedReusablePayment
        )) {
            // selectedReusablePayment still valid
            return;
        }
        if (!validReusablePaymentSources.length) {
            onChange(null);
            return;
        }
        var ps1 = validReusablePaymentSources.find((ps)=>ps.isDefault
        );
        onChange(ps1 || validReusablePaymentSources[0]);
    }
    render() {
        var _props = this.props, selectedReusablePayment = _props.selectedReusablePayment, reusablePaymentSources = _props.reusablePaymentSources;
        var stripePaymentSources = reusablePaymentSources.filter((ps)=>ps.__typename === "StripePaymentSource"
        );
        if (!stripePaymentSources.length) {
            return null;
        }
        return(/*#__PURE__*/ React.createElement(DeletePaymentSourceComponent, {
            onCompleted: (param)=>{
                var deletePaymentSource = param.deletePaymentSource;
                if (deletePaymentSource.success) {
                    toast.success("Successfully removed Card");
                    return;
                }
                toast.error(deletePaymentSource.error);
            },
            onError: (error)=>{
                toast.error(error.message);
            },
            refetchQueries: [
                "ReusablePaymentSources"
            ]
        }, (deletePaymentSource)=>/*#__PURE__*/ React.createElement("div", {
                className: styles.selectionList
            }, stripePaymentSources.map((payment)=>{
                var cardIcon = "brand" in payment.paymentEntity ? payment.paymentEntity.brand === "Visa" ? /*#__PURE__*/ React.createElement(Visa, null) : payment.paymentEntity.brand === "MasterCard" ? /*#__PURE__*/ React.createElement(MasterCard, null) : payment.paymentEntity.brand === "American Express" ? /*#__PURE__*/ React.createElement(AmericanExpress, null) : payment.paymentEntity.brand === "Discover" ? /*#__PURE__*/ React.createElement(Discover, null) : null : null;
                return(/*#__PURE__*/ React.createElement("div", {
                    key: payment.id,
                    className: classNames(styles.creditCard, {
                        [styles.creditCardChecked]: selectedReusablePayment === payment
                    })
                }, /*#__PURE__*/ React.createElement("div", {
                    className: styles.creditCardContainer
                }, /*#__PURE__*/ React.createElement(Radio, {
                    value: payment.id,
                    checked: selectedReusablePayment === payment,
                    onChange: this.handleSelectPayment.bind(this, payment)
                }, /*#__PURE__*/ React.createElement("div", {
                    className: styles.paymentHeader
                }, /*#__PURE__*/ React.createElement("div", {
                    className: styles.paymentHeaderContainer
                }, cardIcon, payment.paymentEntity.__typename === "PaymentCard" && /*#__PURE__*/ React.createElement("div", {
                    className: styles.textBold
                }, payment.paymentEntity.brand)), /*#__PURE__*/ React.createElement("div", {
                    className: styles.textSmall
                }, payment.owner && (payment.owner.verifiedName || payment.owner.name), " ", "-", payment.paymentEntity.__typename === "PaymentCard" && ` xxx ${payment.paymentEntity.last4}`))), /*#__PURE__*/ React.createElement("div", {
                    className: styles.creditCardActions
                }, /*#__PURE__*/ React.createElement(Button, {
                    onClick: this.handleDeletePaymentSource.bind(this, payment.id, deletePaymentSource),
                    className: styles.removeCardButton,
                    variant: "secondary-link",
                    type: "button",
                    size: "xsmall"
                }, "Remove")))));
            }))
        ));
    }
    constructor(...args){
        super(...args);
        this.handleSelectPayment = (selected)=>{
            return this.props.onChange(selected);
        };
        this.handleDeletePaymentSource = (id, deletePaymentSource)=>{
            var _props = this.props, selectedReusablePayment = _props.selectedReusablePayment, onChange = _props.onChange;
            if (onChange && selectedReusablePayment && selectedReusablePayment.id === id) {
                this.setDefaultReusablePayment(selectedReusablePayment);
            }
            deletePaymentSource({
                variables: {
                    id
                }
            });
        };
    }
}
export { ReusablePayments as default };
