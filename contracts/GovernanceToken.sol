// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract GovernanceToken is ERC20Votes
{
    uint256 public s_maxSupply = 1000000 * 1e18;

    constructor() ERC20("GovernanceToken", "GT") ERC20Permit("GovernanceToken")
    {
        _mint(msg.sender, s_maxSupply);
    }

    // required overrides

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20Votes)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20Votes)
    {
        super._mint(to, amount);
    }
    
    function _burn(address account, uint256 amount) internal override(ERC20Votes)
    {
        super._burn(account, amount);
    }
}

// if someone knows that a proposal is coming up, they can just buy
// a lot of tokens, then dump after the vote is over.
// to solve this, take a snapshot of the number of tokens that people
// have at a certain block.