#!/bin/sh

if [[ "$#" -ne 2 ]]; then
    echo "writeUnabtoID takes 2 parameters";
    echo "The first parameter is unabtoID.";
    echo "The second parameter is the unabto encryption key.";
    exit;
fi

printf "#!/bin/sh\nUNABTO_ID=\"$1\"\n" > /etc/init.d/setUnabtoID.sh

if [[ "$#" -eq 2 ]]; then
    printf "UNABTO_KEY=\"$2\"\n" >> /etc/init.d/setUnabtoID.sh
fi

chmod u+x /etc/init.d/setUnabtoID.sh
