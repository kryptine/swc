use crate::{AtRule, Block, Ident, PercentValue, Str};
use swc_common::{ast_node, Span};

#[ast_node]
pub enum KeyframesName {
    #[tag("Ident")]
    Ident(Ident),
    #[tag("Str")]
    Str(Str),
}

#[ast_node("KeyframesRule")]
pub struct KeyframesRule {
    pub span: Span,
    pub name: KeyframesName,
    pub blocks: Vec<KeyframeBlock>,
}

#[ast_node]
pub struct KeyframeBlock {
    pub span: Span,
    pub selector: Vec<KeyframeSelector>,
    pub rule: KeyframeBlockRule,
}

#[ast_node]
pub enum KeyframeSelector {
    #[tag("Ident")]
    Ident(Ident),
    #[tag("PercentValue")]
    Percent(PercentValue),
}

#[ast_node]
pub enum KeyframeBlockRule {
    #[tag("Block")]
    Block(Box<Block>),

    #[tag("*")]
    AtRule(Box<AtRule>),
}
