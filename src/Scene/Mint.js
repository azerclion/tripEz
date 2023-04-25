import React, { useEffect, useState } from "react";
import Web3 from "web3";
import styled, { keyframes } from "styled-components";

import nftContract from "../ABI/nft";

function Mint() {
  const [web3, setWeb3] = useState();
  const [userAccount, setUserAccount] = useState();
  const [myNft, setMyNft] = useState();
  const [Loading, setLoading] = useState(false);

  async function walletHandler() {
    try {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        getUserAccountInfo();
        makeContractApi();
      } else {
        console.log("Please install MetaMask");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  async function makeContractApi() {
    const nft = await nftContract(web3);
    setMyNft(nft);
    console.log(nft);
  }
  async function getUserAccountInfo() {
    const accounts = await web3.eth.getAccounts();
    setUserAccount(accounts[0]);
  }

  useEffect(() => {
    try {
      if (typeof window.ethereum !== "undefined") {
        setWeb3(new Web3(window.ethereum));
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const minting = async () => {
    await myNft.methods
      .mint()
      .send({
        value: web3.utils.toWei("0.01", "ether"),
        from: userAccount,
      })
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <MintContainer>
      <div>Mint</div>
      <WalletButton onClick={walletHandler}>1. CHECK CONNECT</WalletButton>
      <Account>account : {userAccount}</Account>
      <Description>Trip|Ez member를 위한 NFT 입니다.</Description>
      <Description>민팅 가격은 0.01 goerli 입니다.</Description>
      <LoadingSection>{Loading ? "PENDING..." : null}</LoadingSection>
      {userAccount ? (
        <MintButton
          onClick={(e) => {
            minting();
            setLoading(true);
          }}
        >
          2. Minting Button
        </MintButton>
      ) : (
        <MintButtonDeactive>Minting Button</MintButtonDeactive>
      )}

      {myNft && <Address>contract address : {myNft._address}</Address>}
    </MintContainer>
  );
}

const MintContainer = styled.div`
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const WalletButton = styled.button`
  width: 150px;
  height: 25px;
  margin-top: 100px;
  padding: 4px;
  border: 2px solid;
  border-radius: 20px;
  color: #baad98;
  background-color: #48617c;
  cursor: pointer;
`;
const Description = styled.div`
  margin-bottom: 5px;
`;
const MintButton = styled(WalletButton)`
  height: 30px;
  color: whitesmoke;
  background-color: hotpink;
`;
const MintButtonDeactive = styled(MintButton)`
  background-color: darkgray;
`;
const Account = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 12px;
  color: whitesmoke;
`;
const Address = styled(Account)`
  margin-top: 20px;
`;
const LoadingAnimation = keyframes`
  from {
    color: white;
  }
  to {
    color: blue;
  }
`;
const LoadingSection = styled.div`
  color: black;
  margin-bottom: 20px;
  animation: ${LoadingAnimation} 1s linear infinite;
`;

export default Mint;
