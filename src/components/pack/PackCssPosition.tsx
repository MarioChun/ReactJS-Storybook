import styled from "styled-components";

const Container = styled.div`
  h5 {
    font-size: 20px;
    font-weight: 800;
    margin-top: 5px;
    margin-bottom: 1px;
    margin-left: 1px;
  }
`;

const CommonBox = styled.div<{
  position?: string;
  autoHeight?: boolean;
}>`
  position: ${(props) => `${props.position}`};
  display: block;
  justify-content: center;
  background-color: tomato;
  width: 400px;
  height: ${(props) => `${props.autoHeight ? "auto" : "400px"}`};
`;

const SmallBox = styled.div<{
  position?: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}>`
  position: ${(props) => `${props.position}`};
  left: ${(props) => `${props.left}px`};
  right: ${(props) => `${props.right}px`};
  top: ${(props) => `${props.top}px`};
  bottom: ${(props) => `${props.bottom}px`};
  width: 100px;
  height: 100px;
  background-color: green;
  color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PackCssPostion = () => {
  return (
    <Container>
      <h5>static</h5>
      <CommonBox>
        <SmallBox>1</SmallBox>
        <SmallBox>2</SmallBox>
        <SmallBox>3</SmallBox>
        <SmallBox>4</SmallBox>
      </CommonBox>
      <h5>relative</h5>
      <CommonBox>
        <SmallBox position="relative" left={100} top={0}>
          1
        </SmallBox>
        <SmallBox position="relative" left={-50} top={0}>
          2
        </SmallBox>
        <SmallBox position="relative" left={150} top={-25}>
          3
        </SmallBox>
        <SmallBox position="relative" left={300} top={0}>
          4
        </SmallBox>
      </CommonBox>
      <h5>absolute</h5>
      <CommonBox position="relative">
        <SmallBox position="absolute" left={0} top={0}>
          1
        </SmallBox>
        <SmallBox position="absolute" left={300} top={0}>
          2
        </SmallBox>
        <SmallBox position="absolute" left={0} top={300}>
          3
        </SmallBox>
        <SmallBox position="absolute" left={300} top={300}>
          4
        </SmallBox>
      </CommonBox>

      <h5>fixed</h5>
      <CommonBox autoHeight={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
        pretium nibh, et consequat libero. Donec pellentesque justo vel justo
        dictum, at dapibus lectus porttitor. Nulla vitae est id eros congue
        ornare. Pellentesque volutpat tortor dolor, eu lobortis tortor dignissim
        in. Maecenas nulla ligula, vestibulum a lorem sed, euismod feugiat
        nulla. Vestibulum ac mauris sem. Integer tristique rutrum nulla, nec
        cursus dolor vehicula ullamcorper. In vitae arcu eu nisi euismod
        sodales. Quisque volutpat justo et libero posuere, faucibus aliquam
        mauris accumsan. Fusce nec ultricies ligula, quis fringilla odio.
        Quisque eu quam eu lacus interdum pulvinar. Quisque blandit lacus felis,
        ut efficitur mauris efficitur a. Cras feugiat augue vitae nibh
        scelerisque euismod. Nam sed sapien vel purus pellentesque blandit sit
        amet ac nisl. Maecenas vel nibh enim. Proin ac enim auctor, volutpat
        nulla eu, convallis magna. Donec vel pretium lectus. Cras lacinia leo
        nisl, a viverra magna pharetra non. In tincidunt turpis neque, nec
        imperdiet arcu auctor vel. Nulla lacus ex, hendrerit non fringilla in,
        venenatis eu orci. Proin tempor elit diam, at semper neque semper id.
        Duis malesuada quis nisl vel tincidunt. Nullam mattis neque elit, ut
        maximus sapien congue sed. Nulla finibus tortor eget nisi vestibulum
        commodo. Donec sagittis tempor eros. Nulla elementum bibendum augue, ac
        porta odio iaculis eu. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. In erat erat,
        fringilla blandit sapien ac, vulputate consequat mauris. Vivamus dictum
        vestibulum ornare. Phasellus vitae fermentum velit. Nunc tempor, ipsum
        ac ultricies mattis, metus nunc bibendum enim, ut venenatis ex risus in
        ex. Aenean ullamcorper eros pulvinar hendrerit ullamcorper. Morbi cursus
        tristique leo quis mattis. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Nunc molestie enim et erat
        convallis, et convallis erat tempor. Pellentesque a mauris odio. Donec
        erat lorem, efficitur quis pharetra quis, suscipit id mi. Curabitur et
        ex in ante facilisis finibus quis quis sem. Quisque est ex, gravida id
        hendrerit non, laoreet sit amet mauris. Donec ac elementum lorem, eu
        fringilla sapien. Curabitur auctor mi nunc, eget gravida tortor suscipit
        quis. Pellentesque odio mauris, commodo eu cursus eu, semper sed lectus.
        Sed eget venenatis dui, vitae porttitor erat. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Integer finibus velit et tincidunt efficitur. Etiam consequat sem sed
        elit sagittis scelerisque. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Vivamus eu
        libero nulla. Suspendisse dapibus neque ac porta ultricies. Praesent
        faucibus sollicitudin erat a egestas. Aenean et risus sit amet tortor
        vulputate rhoncus vitae eu dui. Fusce placerat ac tortor non venenatis.
        Etiam mollis in dui ut fringilla. Morbi congue lectus ut leo tempus
        dapibus. Nunc neque urna, tempor nec lacus non, scelerisque feugiat
        nisl. Duis lacinia mi ipsum, in tempor mi egestas eu. Proin a justo in
        ante mollis laoreet. Vivamus non lacinia enim. Cras eu felis sit amet
        ipsum ornare vehicula. Integer egestas pulvinar massa quis maximus.
        Maecenas non ante eu sem aliquet consequat eget in magna. Praesent in
        lorem vel augue ultricies aliquet sed vel est. Ut sodales nisi mauris,
        eu congue sapien elementum a. Ut vitae bibendum risus. Curabitur feugiat
        enim lacinia pharetra luctus. Cras iaculis, nunc a pharetra euismod,
        massa mi euismod mauris, id vulputate neque ipsum quis felis. Nulla
        maximus tempor dolor id elementum. Morbi eget vehicula nunc, rutrum
        posuere metus. Quisque euismod cursus sollicitudin. Maecenas mollis sem
        est, sed rhoncus velit maximus nec. Duis iaculis diam orci, hendrerit
        facilisis tellus varius ac. Nullam bibendum velit quis nunc pretium
        interdum. Morbi tincidunt nibh in ex tristique, eu ornare eros euismod.
        Suspendisse tristique faucibus lectus vitae lacinia. Proin gravida urna
        a luctus rhoncus. Nam ut laoreet massa. Vestibulum rutrum tellus ipsum,
        et iaculis ex ultrices in. Donec sollicitudin lorem sit amet interdum
        consequat. Sed et arcu blandit, posuere massa in, imperdiet ipsum.
        Aliquam porta elementum suscipit. Sed pretium ante nibh, at pulvinar mi
        egestas sit amet. Etiam in tellus vel tortor ultrices ultricies a at
        risus. Nulla a felis metus. Donec ultrices odio ut diam dapibus finibus.
        Donec varius risus ac tellus placerat suscipit. Sed vitae posuere ipsum.
        Fusce risus ipsum, malesuada vel turpis ullamcorper, aliquet facilisis
        tortor. Phasellus vitae imperdiet diam. Nullam in nunc sit amet libero
        luctus mattis. Aliquam erat volutpat. Donec porta orci leo, quis pretium
        sapien fermentum ut. Nunc egestas nec sem sed mattis. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Pellentesque volutpat
        urna ut justo accumsan vestibulum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec suscipit neque ac iaculis bibendum.
        Ut mi quam, volutpat vel volutpat in, cursus commodo augue. Fusce nec
        ligula lacinia, molestie justo ultricies, efficitur neque. Sed sapien
        nisl, luctus vitae nunc in, gravida viverra turpis. Etiam dapibus eget
        est quis tincidunt. Nam dui ante, luctus sed elit vel, mattis maximus
        purus. Sed malesuada, justo a semper eleifend, tortor diam sagittis sem,
        eu facilisis orci ipsum a ante. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Aenean non ultricies
        purus. Integer a suscipit elit. Etiam scelerisque quam nibh, vitae
        aliquam ligula ultricies ac. Etiam mattis ipsum nec nulla tristique
        accumsan. Etiam ornare neque nunc. Nulla facilisi. Aliquam sed arcu
        suscipit lacus finibus eleifend. Etiam quis pellentesque mi, nec mollis
        neque. Nam pretium nisi lectus, at rhoncus enim malesuada non. Nullam
        viverra orci sit amet mi volutpat aliquet. Aliquam congue felis non
        neque volutpat lobortis. Maecenas est justo, aliquam at aliquet et,
        facilisis congue metus. Suspendisse faucibus quam a velit blandit
        elementum. Curabitur gravida aliquet velit, vel scelerisque leo
        elementum non. Nunc fermentum, ipsum ut feugiat iaculis, leo urna tempor
        nisl, vel convallis metus leo at tellus. Nullam pretium enim lorem,
        vitae posuere turpis facilisis sed. Donec a hendrerit nunc. Proin
        vulputate arcu arcu, lacinia dignissim neque ullamcorper ut. Nam sit
        amet arcu ac orci tempor convallis non sit amet risus. Sed nec risus
        turpis. Aenean eget massa justo. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Sed rhoncus id
        lacus et pretium. Aenean dictum ipsum eros, ac cursus neque auctor quis.
        Cras a malesuada felis. Quisque nulla justo, rutrum nec mollis quis,
        lobortis vitae tortor. Curabitur varius felis tortor, gravida commodo
        sapien ultrices in. Aenean eget urna nec quam pharetra iaculis at eu
        dui. Aenean mi diam, cursus eu egestas in, feugiat gravida mi. In rutrum
        diam justo, eu convallis dui auctor eu. Quisque vel dictum dolor. Donec
        at cursus neque. Phasellus nunc ipsum, pellentesque ut lacinia id,
        aliquam vel nibh. Sed varius ligula neque, nec vulputate odio lobortis
        ac. Nullam maximus neque arcu, ut sodales ex luctus vel. Fusce convallis
        posuere nibh vel suscipit. Aenean aliquet dictum luctus. Maecenas
        vehicula, nunc ut blandit imperdiet, tortor nunc consectetur augue,
        vitae iaculis lorem arcu vitae lacus. Fusce eget ligula non nunc ornare
        iaculis ac tristique ante. Morbi et orci orci. Phasellus a consequat
        nibh. Donec fringilla rutrum lacus, non dictum nibh. Vivamus interdum
        eget lectus eget finibus. Integer dui nibh, ultricies quis placerat nec,
        faucibus in metus. Nunc in iaculis tortor, nec auctor eros. Maecenas
        placerat nibh quam, id fringilla ex volutpat vel. Duis vehicula turpis
        ut ipsum malesuada posuere. Etiam pellentesque tincidunt nunc, ac tempor
        justo euismod a. Fusce eget vulputate elit. Pellentesque lorem est,
        convallis ut mauris vitae, dignissim porttitor ex. Ut iaculis turpis
        quis faucibus vulputate. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Praesent sagittis rhoncus ex eget iaculis. Curabitur
        aliquam dui nec magna vulputate dignissim. Nam vitae commodo tortor, eu
        hendrerit tellus. Vestibulum nulla lacus, sodales at neque non,
        imperdiet laoreet erat. Sed sit amet purus mollis lectus accumsan
        molestie. Donec ut arcu eu ipsum auctor mattis. Phasellus eu lorem vel
        ipsum imperdiet suscipit. Suspendisse molestie rhoncus ipsum a posuere.
        Cras odio justo, pretium vitae orci feugiat, varius placerat odio. Sed
        eu erat magna. Maecenas viverra aliquam odio et mattis. Nullam ac nulla
        non nulla luctus pharetra aliquet et mi. Cras id diam pharetra, volutpat
        turpis a, pulvinar elit. Pellentesque vehicula dignissim consequat.
        Morbi tincidunt placerat ante, a maximus nulla accumsan sed. Nam quam
        nisi, luctus nec nulla id, placerat eleifend eros. Morbi at nulla nec ex
        egestas luctus. Sed fringilla aliquam tempor. Nam tincidunt, sem in
        lacinia suscipit, urna augue tempus magna, ultricies pharetra quam quam
        ac odio. Morbi lectus ligula, pellentesque quis fringilla a, blandit
        eget sapien. Etiam ultricies nulla sit amet eros volutpat pretium. Ut
        malesuada, ipsum vitae pharetra egestas, velit orci congue nisi, non
        sodales elit arcu id dolor. Donec nec tempus augue. Nullam aliquam
        aliquam nisi, non commodo libero lobortis et. Vivamus sed congue nibh.
        Etiam quis mattis tellus, in tincidunt eros. Duis at orci hendrerit,
        posuere arcu vel, pulvinar purus. Maecenas at magna et magna consequat
        venenatis nec ut velit. Praesent sagittis quam nec velit ornare
        dignissim ac a sapien. In euismod nisl justo, eget maximus ligula
        ultricies eu. Phasellus suscipit nisl condimentum odio vulputate
        elementum. Donec et velit non elit pharetra consectetur. Nunc aliquet
        feugiat justo sit amet tristique. Praesent fringilla vel magna eget
        interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Vestibulum nec varius risus, at porta massa. Vestibulum finibus purus
        massa, sed fermentum augue fringilla sed. Aliquam erat volutpat. Donec
        iaculis a tortor et ultricies. Duis luctus sollicitudin mollis. Ut ut
        augue elementum, sodales arcu at, egestas nulla. Donec mollis eros non
        augue suscipit convallis nec a tortor. Praesent mattis, lacus a luctus
        fermentum, nisi massa pretium nunc, non aliquam odio neque in leo.
        Vestibulum at elementum justo. Nulla malesuada congue mauris, nec
        suscipit felis vulputate feugiat. Nam porta malesuada lorem, sit amet
        elementum ex ultrices at. Aenean eleifend libero metus, eu ultricies
        neque molestie quis. Aenean varius orci eu ante dignissim, nec suscipit
        lorem tristique. Integer turpis velit, lobortis id mi at, aliquam
        commodo augue. Ut finibus enim in elementum tempor. Donec commodo
        volutpat feugiat. Nullam velit velit, semper non sapien non, eleifend
        tempor justo. Donec lobortis risus et eros vestibulum, in lobortis nisi
        hendrerit. Aenean in bibendum leo. Vestibulum eget aliquam est. Etiam
        convallis placerat risus vitae gravida. Nam mi arcu, tempor at eros sit
        amet, faucibus rutrum lectus. Ut quis pretium sem. Nullam commodo cursus
        odio et imperdiet. Vestibulum tempor nibh ut lorem malesuada, quis
        mattis nisl accumsan. Suspendisse porta vitae lacus sed consectetur.
        Quisque consequat purus sit amet eros dictum ultrices sit amet non
        nulla. Cras nulla elit, venenatis in ex eu, faucibus ultrices ligula.
        Aliquam erat volutpat. Integer at convallis nisl, sed consectetur lorem.
        Sed ultricies nec elit id viverra. Pellentesque fringilla augue feugiat
        ligula lacinia, et interdum nulla scelerisque. Nullam dolor velit, porta
        vitae dui id, bibendum gravida odio. Ut nulla nulla, molestie quis
        eleifend in, hendrerit sit amet ligula. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Vivamus
        imperdiet sodales congue. In molestie arcu ut metus blandit, cursus
        luctus lectus rhoncus. Etiam cursus tellus fringilla varius placerat.
        Morbi aliquet turpis vitae rutrum laoreet. Aenean eu efficitur dolor.
        Aliquam id mi molestie, facilisis sem eu, dignissim augue. Vestibulum
        feugiat mauris tortor. Nulla laoreet eleifend elit, vel varius lorem.
        Etiam tincidunt, tortor sit amet tristique viverra, ipsum leo placerat
        orci, dapibus lacinia ante nisi quis lorem. Maecenas molestie fringilla
        mauris sed tempus. Vestibulum quis tincidunt ex. Aenean posuere vitae
        dui sed bibendum. Integer aliquam nec mi nec aliquet. Quisque eu
        sagittis eros. Vestibulum orci felis, aliquet a justo faucibus,
        tristique pulvinar magna. In a sem ultrices, tincidunt nisl ut,
        imperdiet mauris. Proin in vehicula quam. Generated 20 paragraphs, 1913
        words, 12697 bytes of Lorem Ipsum
        <SmallBox position="fixed" left={0} top={0}>
          1
        </SmallBox>
        <SmallBox position="fixed" right={0} top={0}>
          2
        </SmallBox>
        <SmallBox position="fixed" left={0} bottom={0}>
          3
        </SmallBox>
        <SmallBox position="fixed" right={0} bottom={0}>
          4
        </SmallBox>
      </CommonBox>
      <h5>sticky 개발중</h5>
    </Container>
  );
};

export default PackCssPostion;
