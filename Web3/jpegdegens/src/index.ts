import { ethers } from "ethers";

function getEth() {
    //@ts-ignore
    const eth = window.ethereum;
    if (!eth) {
        throw new Error("Get Metamask and a +ve attitude");
    }
    return eth;
}

async function hasAccounts() {
    const eth = getEth();
    const accounts = await eth.request({ method: "eth_accounts" }) as string[];
    return accounts && accounts.length;
}

async function requestAccounts() {
    const eth = getEth();
    const accounts = await eth.request({ method: "eth_requestAccounts" }) as string[];
    return accounts && accounts.length;
}

async function run() {
    if (!(await hasAccounts()) && !(await requestAccounts())) {
        throw new Error("Please let me take your money");
    }

    const counter = new ethers.Contract(
        '0x5fbdb2315678afecb367f032d93f642f64180aa3',
        [
            "function count() public",
            "function getCounter() public view returns (uint32)"
        ],
        new ethers.providers.Web3Provider(getEth()).getSigner()
    );

    const el = document.createElement("div");

    async function setCounter() {
        el.innerHTML = (await counter.getCounter()).toString();
    }

    setCounter();

    const button = document.createElement("button");
    button.innerText = "increment";
    button.onclick = async function() {
        await counter.count();
    }

    document.body.appendChild(el);
    document.body.appendChild(button);
}

run();
