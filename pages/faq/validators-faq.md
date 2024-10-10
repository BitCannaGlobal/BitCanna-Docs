---
outline: false
title: Frequently Asked Questions
---
# Frequently Asked Questions
### Validators

::: details What is a full node/validator node?
A full node is a machine/computer that runs with the chain 100% synced. This means that it has to be running at any time.

A validator node is a machine/computer operating in a (delegated) Proof of Stake consensus system. Once it is set up it will compete with other validator nodes for a chance to sign blocks. Doing so will grant the validator rewards.
:::

::: details What are the requirements to become a validator?
* Proficient knowledge of working with command lines.
* A minimum of roughly 2 BCNA to submit your validator to the network (create-validator and self-delegate TX)
* Within the BitCanna network, a maximum amount of 100 validators can be actively signing blocks and therefore earn rewards. These validators are chosen based on their [voting power](/pages/concepts-terms/validators-and-delegators.md#voting-power). The 100 validators with the most voting power will be able to earn rewards. So in other words, you will most likely need a decent amount of [delegations](/pages/concepts-terms/validators-and-delegators.md#delegators) or self-delegated stake.

    **Hardware requirements**
* Linux VPS with 8GB RAM, 4vCPU's, 200 GB disk space per year for Mainnet (the more resources the better)
:::

::: details Why do I see such large amounts of ubcna/bcna?
BCNA is the native coin on the BitCanna chain. In order to work with very small amounts (for example when calculating transaction fees), ubcna is used.

* 1 BCNA equals 1000000ubcna, as "u" stands for micro.\
  Example: 10,11 BCNA equals 10110000ubcna.

BCNA and ubcna are also called the denom of the BitCanna native coin.
:::

::: details How do I change validator details?
In order to change different information about your validator you can use the command below. Make sure to change the parts in brackets to fit your own information.
``` sh
bcnad tx staking edit-validator \
    --new-moniker=["myMoniker"] \
    --website=["http://mywebsite.com/"] \
    --identity=[00000000000] \
    --details=["My details"] \
    --chain-id=bitcanna-testnet-[number] \
    --gas-adjustment 1.5 \
    --gas="auto" \
    --gas-prices="0.01ubcna" \
    --from=[walletName] \
    --commission-rate="0.01"
```
:::

::: details How do I add an image for my validator on the web wallet and explorer?
Besides a name for your validator, it is also possible to set an image for your validator to help you stand out. Thanks to Keybase.io, you're able to add an image to your validator. This image will show in the BitCanna wallet and explorer.

* First, if you do not already have an account on Keybase.io, create one.
  Once your account is set up; go to your account overview and set the image you want to use for your validator.
* Create a PGP-key (Pretty Good Privacy).
  We will use the 64-bit key (consisting of a combination of 16 letters and numbers).
* Send the transaction to bind the PGP-key to your validator below.
``` sh
bcnad tx staking edit-validator \
  --identity “[PGP-key]” \
  --from [wallet name] \
  --chain-id bitcanna-testnet-[number] \
  --gas auto \
  --gas-adjustment 1.5 \
  --gas-prices 0.01ubcna
```
[PGP-key] = The key you created on Keybase.io\
[wallet name] = Your own wallet name

Once successful, the image of your validator will be updated. This can take up to 1 hour.
:::
